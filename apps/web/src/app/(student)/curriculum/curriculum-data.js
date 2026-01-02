"use strict";
// Victorian Curriculum Data Types and Registry
// All year levels are treated equally - imported from separate files
Object.defineProperty(exports, "__esModule", { value: true });
exports.year6Maths = exports.year5Maths = exports.year4Maths = exports.year3Maths = void 0;
exports.getCurriculum = getCurriculum;
exports.getAvailableYearLevels = getAvailableYearLevels;
// Import all year levels (all treated equally)
const year3_data_1 = require("./year3-data");
Object.defineProperty(exports, "year3Maths", { enumerable: true, get: function () { return year3_data_1.year3Maths; } });
const year4_data_1 = require("./year4-data");
Object.defineProperty(exports, "year4Maths", { enumerable: true, get: function () { return year4_data_1.year4Maths; } });
const year5_data_1 = require("./year5-data");
Object.defineProperty(exports, "year5Maths", { enumerable: true, get: function () { return year5_data_1.year5Maths; } });
const year6_data_1 = require("./year6-data");
Object.defineProperty(exports, "year6Maths", { enumerable: true, get: function () { return year6_data_1.year6Maths; } });
// Curriculum registry by year level
const curriculumRegistry = {
    3: year3_data_1.year3Maths,
    4: year4_data_1.year4Maths,
    5: year5_data_1.year5Maths,
    6: year6_data_1.year6Maths,
};
// Get curriculum for a specific year level
function getCurriculum(yearLevel) {
    return curriculumRegistry[yearLevel] || null;
}
// Get available year levels
function getAvailableYearLevels() {
    return Object.keys(curriculumRegistry).map(Number).sort((a, b) => a - b);
}
