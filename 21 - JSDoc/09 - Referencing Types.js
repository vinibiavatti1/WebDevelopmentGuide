// Referencing Types
// - Bridges documentation and type safety by pointing to existing types or importing modules.

// @ts-check

//==================================================================================================
// Type Reference
//==================================================================================================

// Direct Inline Reference
// - Leverages type referencing to reuse function signatures and enforce consistent contracts.

/**
 * Check if user has admin rule.
 * @param {string} userName The user name.
 * @returns {boolean} True if user has admin rule.
 */
function hasAdminRule(userName) { return true }

/**
 * @type {hasAdminRule}
 */
function isAdmin(userName) { return true }

// Typedef Reference
// - References an existing type or property definition within the file to create a clean alias.

/**
 * @typedef {Object} Account
 * @property {string} email The user email.
 * @property {number} balance The account balance.
 */

/**
 * @typedef {Account['balance']} BalanceType
 */

//==================================================================================================
// Type Import
//==================================================================================================

// Direct Import
// - Uses the import() syntax directly inside a parameter annotation to pull an external type on the
//   fly.

/**
 * Processes the employee record.
 * @param {import('../.resources/module.js').Employee} employee The employee.
 * @returns {boolean} Success status.
 */
function processEmployee(employee) {
    return true
}

// Typedef Import
// - Applies the @typedef tag alongside import syntax to create a local alias for an external type.

/**
 * @typedef {import('../.resources/module.js').Employee} LocalEmployee
 */

/**
 * Displays employee details.
 * @param {LocalEmployee} employee The imported employee object.
 */
function displayEmployee(employee) {
    console.log(employee)
}
