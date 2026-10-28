// Custom Types
// - Establishes reusable custom data structures and type aliases using JSDoc annotations.

// @ts-check

//==================================================================================================
// Custom Type Definition
//==================================================================================================

// Definition
// - Applies the @typedef and @property annotations to define a structured custom object type that
//   can be reused across the codebase.

/**
 * Define the User type.
 * @typedef {Object} User
 * @property {string} name The user name.
 * @property {number} age The user age.
 * @property {() => boolean} isOverage True if the age > 18.
 */

//==================================================================================================
// Custom Type Usage
//==================================================================================================

// Usage
// - References the custom-defined type within function signatures to enforce structure and improve
//   type-checking.

/**
 * Registers the user in the database.
 * @param {User} user The user to register.
 * @returns {boolean} Operation success.
 */
function registerUser(user) {
    console.log('User registered successfully')
    return true
}
