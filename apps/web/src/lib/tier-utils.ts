/**
 * Tier utility functions for backward compatibility with 'explorer' tier name
 *
 * Context: The free tier was originally named 'explorer' ($0.99/mo), but was renamed
 * to 'free' (Always Free, no credit card) in the 2026 pricing strategy. Existing users
 * may still have tier='explorer' in the database.
 *
 * These utilities ensure 'explorer' and 'free' are treated as equivalent throughout
 * the application.
 */

export type TierName = 'free' | 'explorer' | 'scholar' | 'achiever';

/**
 * Check if a tier is the free/explorer tier
 * @param tier - The tier to check
 * @returns true if tier is 'free' or 'explorer'
 */
export const isFreeOrExplorerTier = (tier: string | null | undefined): boolean => {
  return tier === 'free' || tier === 'explorer';
};

/**
 * Check if a tier is a paid tier (scholar or achiever)
 * @param tier - The tier to check
 * @returns true if tier is 'scholar' or 'achiever'
 */
export const isPaidTier = (tier: string | null | undefined): boolean => {
  return tier === 'scholar' || tier === 'achiever';
};

/**
 * Normalize tier name for display/comparison
 * Maps 'explorer' → 'free' for consistency
 * @param tier - The tier to normalize
 * @returns Normalized tier name
 */
export const normalizeTier = (tier: string | null | undefined): 'free' | 'scholar' | 'achiever' => {
  if (tier === 'explorer') return 'free';
  if (tier === 'scholar') return 'scholar';
  if (tier === 'achiever') return 'achiever';
  return 'free'; // default
};

/**
 * Get display name for a tier
 * @param tier - The tier name
 * @returns Human-readable tier name
 */
export const getTierDisplayName = (tier: string | null | undefined): string => {
  if (isFreeOrExplorerTier(tier)) return 'Explorer';
  if (tier === 'scholar') return 'Scholar';
  if (tier === 'achiever') return 'Achiever';
  return 'Free';
};

/**
 * Get price display for a tier
 * @param tier - The tier name
 * @returns Price string
 */
export const getTierPrice = (tier: string | null | undefined): string => {
  if (isFreeOrExplorerTier(tier)) return 'Always Free';
  if (tier === 'scholar') return '$5/month';
  if (tier === 'achiever') return '$12/month';
  return 'Always Free';
};
