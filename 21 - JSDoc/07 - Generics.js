// Generics
// - Generic types are used to create reusable, type-safe components, functions, and data structures
//   that work across a variety of types rather than a single concrete type.

// @ts-check

//==================================================================================================
// Generic Functions
//==================================================================================================

// Generic Function
// - Captures the argument type into a type variable (T) to enforce return type parity.

/**
 * @template T
 * @param {T} value The input value.
 * @returns {T} The same value.
 */
function identity(value) {
    return value
}
const numValue = identity(42)
const strValue = identity('Hello')

// Generic Arrow Functions
// - Defines generic parameter signatures within arrow function expressions using JSDoc.

/**
 * @template T
 * @param {T[]} array The target array.
 * @returns {T | undefined} The first element or undefined.
 */
const getFirstElement = (array) => {
    return array[0]
}
const firstNum = getFirstElement([10, 20, 30])

//==================================================================================================
// Generic Interfaces & Types
//==================================================================================================

// Generic Interface / Type Structure
// - Parameterizes type definitions using @template to wrap arbitrary data structures cleanly.

/**
 * @template T
 * @typedef {Object} ApiResponse
 * @property {T} data The response payload.
 * @property {number} status The HTTP status code.
 * @property {boolean} success The success indicator.
 */

/**
 * @typedef {Object} User
 * @property {number} id The user ID.
 * @property {string} name The user name.
 */

/** @type {ApiResponse<User>} */
const response = {
    data: { id: 1, name: 'John' },
    status: 200,
    success: true
}

// Generic Type Alias with Defaults
// - Parameterizes complex type shapes, supporting default type arguments via JSDoc syntax.

/**
 * @template [T=string]
 * @typedef {Object} Container
 * @property {T} value The contained value.
 */

/** @type {Container} */
const stringContainer = { value: 'Default String' }
/** @type {Container<number>} */
const numberContainer = { value: 100 }

//==================================================================================================
// Generic Constraints
//==================================================================================================

// Generic Constraints (extends)
// - Restricts allowed type arguments to shapes that satisfy a specific base contract.

/**
 * @typedef {Object} SupportsLength
 * @property {number} length The length property.
 */

/**
 * @template {SupportsLength} T
 * @param {T} arg The argument possessing a length property.
 * @returns {number} The evaluated length.
 */
function logLength(arg) {
    return arg.length
}

logLength('Hello World')
logLength([1, 2, 3])

export { }
