import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute,
  CognitoUserSession,
} from 'amazon-cognito-identity-js';

// Cognito configuration
const COGNITO_CONFIG = {
  UserPoolId: 'ap-southeast-2_KQjSkcKvP',
  ClientId: '6sehatih95apslqtikic4sf39o',
};

const userPool = new CognitoUserPool(COGNITO_CONFIG);

export interface User {
  id: string;
  email: string;
  name: string;
  tier: 'free' | 'essential' | 'premium';
}

// Get current session
function getCurrentSession(): Promise<CognitoUserSession | null> {
  return new Promise((resolve) => {
    const cognitoUser = userPool.getCurrentUser();
    if (!cognitoUser) {
      resolve(null);
      return;
    }

    cognitoUser.getSession((err: Error | null, session: CognitoUserSession | null) => {
      if (err || !session?.isValid()) {
        resolve(null);
        return;
      }
      resolve(session);
    });
  });
}

// Get JWT token for API calls
export async function getToken(): Promise<string | null> {
  // First check for OAuth tokens in localStorage (from OAuth flow)
  if (typeof window !== 'undefined') {
    const idToken = localStorage.getItem('idToken');
    if (idToken) {
      return idToken;
    }
  }

  // Fall back to Cognito session tokens (email/password flow)
  const session = await getCurrentSession();
  if (!session) return null;
  return session.getIdToken().getJwtToken();
}

// Store user in localStorage (for quick access)
export function setUser(user: User): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUser(): User | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem('user');
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function clearUser(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('user');
  localStorage.removeItem('selectedChild');
  // Also clear OAuth tokens to prevent stale token usage on re-login
  localStorage.removeItem('idToken');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('childProfile');
}

// Clear all auth state (for OAuth redirect to prevent stale data)
export function clearAllAuthState(): void {
  if (typeof window === 'undefined') return;

  // Clear our custom tokens
  localStorage.removeItem('user');
  localStorage.removeItem('idToken');
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('childProfile');
  localStorage.removeItem('selectedChild');

  // Sign out from Cognito SDK (clears its localStorage entries)
  const cognitoUser = userPool.getCurrentUser();
  if (cognitoUser) {
    cognitoUser.signOut();
  }
}

// Store selected child
export function setSelectedChild(childId: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('selectedChild', childId);
}

export function getSelectedChild(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('selectedChild');
}

// Child profile storage (for child login flow)
export interface ChildProfile {
  id: string;
  name: string;
  avatar?: string;
  yearLevel?: number;
  username?: string;
  parentId: string;
  tier?: string; // Parent's subscription tier for feature gating
}

export function setChildProfile(profile: ChildProfile): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('childProfile', JSON.stringify(profile));
  localStorage.setItem('selectedChild', profile.id);
}

export function getChildProfile(): ChildProfile | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem('childProfile');
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
}

export function clearChildProfile(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('childProfile');
  localStorage.removeItem('selectedChild');
}

// Sign in with Cognito
export async function signIn(email: string, password: string): Promise<{ user: User; token: string }> {
  return new Promise((resolve, reject) => {
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: userPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    cognitoUser.authenticateUser(authDetails, {
      onSuccess: (session) => {
        const idToken = session.getIdToken();
        const payload = idToken.payload;

        const user: User = {
          id: payload.sub,
          email: payload.email,
          name: payload.name || payload.email.split('@')[0],
          tier: (payload['custom:tier'] as User['tier']) || 'free',
        };

        setUser(user);
        resolve({ user, token: idToken.getJwtToken() });
      },
      onFailure: (err) => {
        reject(new Error(err.message || 'Authentication failed'));
      },
      newPasswordRequired: () => {
        reject(new Error('Password change required. Please contact support.'));
      },
    });
  });
}

// Sign up with Cognito
export async function signUp(data: {
  email: string;
  password: string;
  name: string;
  plan?: string;
}): Promise<{ user: User; token: string }> {
  return new Promise((resolve, reject) => {
    const attributeList = [
      new CognitoUserAttribute({ Name: 'email', Value: data.email }),
      new CognitoUserAttribute({ Name: 'name', Value: data.name }),
    ];

    if (data.plan) {
      attributeList.push(new CognitoUserAttribute({ Name: 'custom:tier', Value: data.plan }));
    }

    userPool.signUp(
      data.email,
      data.password,
      attributeList,
      [],
      (err, result) => {
        if (err) {
          reject(new Error(err.message || 'Registration failed'));
          return;
        }

        if (!result) {
          reject(new Error('Registration failed'));
          return;
        }

        // User needs to verify email before they can sign in
        const user: User = {
          id: result.userSub,
          email: data.email,
          name: data.name,
          tier: (data.plan as User['tier']) || 'free',
        };

        // Don't set user or auto-signin - they need to verify first
        resolve({ user, token: '' });
      }
    );
  });
}

// Confirm signup with verification code
export async function confirmSignUp(email: string, code: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: userPool,
    });

    cognitoUser.confirmRegistration(code, true, (err, result) => {
      if (err) {
        reject(new Error(err.message || 'Verification failed'));
        return;
      }
      resolve();
    });
  });
}

// Resend verification code
export async function resendVerificationCode(email: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const cognitoUser = new CognitoUser({
      Username: email,
      Pool: userPool,
    });

    cognitoUser.resendConfirmationCode((err, result) => {
      if (err) {
        reject(new Error(err.message || 'Failed to resend code'));
        return;
      }
      resolve();
    });
  });
}

// Sign out
export function signOut(): void {
  const cognitoUser = userPool.getCurrentUser();
  if (cognitoUser) {
    cognitoUser.signOut();
  }
  clearUser();
  if (typeof window !== 'undefined') {
    window.location.href = '/';
  }
}

// Check if authenticated
export async function isAuthenticated(): Promise<boolean> {
  const session = await getCurrentSession();
  return session !== null && session.isValid();
}

// Synchronous check for quick UI rendering
export function isAuthenticatedSync(): boolean {
  if (typeof window === 'undefined') return false;
  return getUser() !== null;
}
