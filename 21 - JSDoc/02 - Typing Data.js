// Typing Data
// - The @type annotation explicitly defines data types for variables and constants.

// @ts-check

//==================================================================================================
// Data Types
//==================================================================================================

// Primitive types
// - Specifies standard JavaScript types like string, number, or boolean for variables.

/** @type {string} */
let userName = 'John'

// Union
// - The union operator "|" allows a variable to accept multiple distinct types.

/** @type {number | string} */
let userId = 1

// Lists
// - Uses bracket notation "[]" to specify an array containing elements of a specific data type.

/** @type {string[]} */
let values = ['A', 'B', 'C']

// Tuples
// - Defines an array with a fixed number of elements where each element has a specific type.

/** @type {[number, number]} */
let point = [1, 2]

// Sets
// - Leverages generic syntax to define a collection holding unique elements of a specific data
//   type.

/** @type {Set<number>} */
let numbers = new Set()

// Maps
// - Establishes a key-value collection mapping specific key types to corresponding value types.

/** @type {Map<string, number>} */
let props = new Map()

// Constants
// - Declares a read-only constant variable paired with an explicit type annotation.

/** @const {string} */
const BASE_URL = 'http://api.dev'
