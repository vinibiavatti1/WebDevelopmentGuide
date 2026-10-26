// JSDoc
// - A formal documentation syntax used within comments to describe functions, variables, and types,
//   enabling IDE type-checking and autocompletion.

//==================================================================================================
// TypeScript Check
//==================================================================================================

// Enable TS Check
// - The "// @ts-check" comment enables static type checking in a single JavaScript file.
// - It uses VS Code's built-in TypeScript language engine, meaning no extra TypeScript installation
//   or dependencies are required.

// @ts-check

// Enable TS Check Globally
// - To enable type checking globally across your entire project without adding the directive to
//   every file, create a "jsconfig.json" file at the project root:
// - Example:
//   {
//       "compilerOptions": {
//           "checkJs": true,
//           "strict": true
//       }
//   }

//==================================================================================================
// Variables & Constants
//==================================================================================================

// Primitive types
// - Annotates a variable with a primitive data type like string, number, or boolean.
// - Output: John

/** @type {string} */
let userName = 'John'
console.log(userName)

// Union
// - Allows a variable to accept multiple distinct types using the pipe (|) operator.
// - Output: 1

/** @type {number | string} */
let userId = 1
console.log(userId)

// Lists
// - Specifies an array type containing elements of a specific data type followed by brackets ([]).
// - Output: [ 'A', 'B', 'C' ]

/** @type {string[]} */
let values = ['A', 'B', 'C']
console.log(values)

// Tuples
// - Defines an array with a fixed number of elements where each element has a specific type.
// - Output: [ 1, 2 ]

/** @type {[number, number]} */
let point = [1, 2]
console.log(point)

// Constants
// - Declares a read-only constant variable with an explicit type annotation.
// - Output: http://api.dev

/** @const {string} */
const BASE_URL = 'http://api.dev'
console.log(BASE_URL)

//==================================================================================================
// Objects & Enums
//==================================================================================================

// Objects
// - Documents a generic object structure with explicitly typed property keys.

/**
 * User data.
 * @type {Object}
 * @property {string} name The user name.
 * @property {number} age The user age.
 */
let userData = {
    name: 'John',
    age: 30
}

// Readonly objects
// - Defines a frozen object configuration whose properties cannot be modified after initialization.

/**
 * Config object.
 * @type {Object}
 * @readonly
 */
const CONFIG = Object.freeze({
    timeout: 1200
})

// Enums
// - Defines a set of named constant values using Object.freeze and the @enum annotation.

/**
 * Colors enumeration.
 * @enum {string}
 * @readonly
 */
const Colors = Object.freeze({
    RED: '#ff0000',
    GREEN: '#00ff00',
    BLUE: '#0000ff',
})

//==================================================================================================
// Functions & Methods
//==================================================================================================

// Functions
// - Documents function parameters and return types to provide strict IntelliSense support.

/**
 * Calculates the sum of two numbers.
 * @param {number} x The first number to sum.
 * @param {number} y The second number to sum.
 * @returns {number} The sum result.
 */
function sum(x, y) {
    return x + y
}

// Functions with exceptions
// - Documents potential errors thrown during execution using the @throws annotation.

/**
 * Calculates the division of two numbers.
 * @param {number} x The dividend.
 * @param {number} y The divisor.
 * @throws {RangeError} If the divisor is zero.
 * @returns {number} The division result.
 */
function div(x, y) {
    if (y === 0) {
        throw new RangeError('Cannot divide by zero')
    }
    return x / y
}

// Async functions (Promises)
// - Documents asynchronous functions that return a Promise wrapped around a specific type.

/**
 * Fetches the user data.
 * @param {number} userId The user id.
 * @returns {Promise<string>} The user name.
 */
async function fetchUserName(userId) {
    return 'http://api.dev'
}

// Functions with callbacks
// - Documents higher-order functions taking a callback parameter using function type signatures.

/**
 * Open a file.
 * @param {string} name The file name.
 * @param {function(string): void} callback The function to process the content.
 */
function openFile(name, callback) {
    const content = 'Hello World'
    callback(content)
}

// Functions with callbacks (as arrow function)
// - Documents higher-order functions using arrow function syntax within JSDoc parameter annotations.

/**
 * Reads the file content.
 * @param {string} name The file name.
 * @param {(content: string) => void} callback The function to process the content.
 */
function readFile(name, callback) {
    const content = 'Hello World'
    callback(content)
}

//==================================================================================================
// Type Definition
//==================================================================================================

// Custom type definition
// - Creates a reusable custom composite type using the @typedef annotation.

/**
 * Define the User type.
 * @typedef {Object} User
 * @property {string} name The user name.
 * @property {number} age The user age.
 * @property {function(): boolean} isOverage True if the age > 18.
 */

// Using custom type definition
// - Applies a custom typedef to function parameters for clean structural type checking.

/**
 * Registers the user in the database.
 * @param {User} user The user to register.
 * @returns {boolean} Operation success.
 */
function registerUser(user) {
    console.log('User registered successfully')
    return true
}

//==================================================================================================
// Interfaces and Abstract Classes
//==================================================================================================

// Interfaces
// - Defines a contract where the @abstract annotation identifies methods that must be implemented.

/** @interface */
class Formatable {
    format() {
        throw new Error('Not implemented')
    }
}

// Abstract Classes
// - Defines a base class where the @abstract annotation identifies methods that must be override.
// - The @abstract annotation identifies an abstract class, and methods that must be overridden.
// - The @virtual annotation identifies methods that can be optionally overridden.
// - Properties (get & set) can also be marked as @abstract or @virtual.

/** @abstract */
class AbstractPerson {

    /** @abstract */
    fullName() {
        throw new Error('Not implemented')
    }

    /** @virtual */
    computeAge() {
        return null
    }
}

// Implementation
// - Implements an abstract base class or interface contract using the @implements annotation.

/** @implements {Formatable} */
class Person extends AbstractPerson {

    fullName() {
        return 'John Doe'
    }

    format() {
        return 'John Doe'
    }
}
const person = new Person()

//==================================================================================================
// Callbacks
//==================================================================================================

// Callback definition
// - The @callback annotation can be used to create a new callback function type definition.

/**
 * Define the ProcessFileContent callback.
 * @callback ProcessFileContent
 * @param {string} content The file content.
 */

// Using callback definition
// - Using the callback name identifies the type of the variable.

/**
 * Reads the document content.
 * @param {string} name The file name.
 * @param {ProcessFileContent} callback The function to process the content.
 */
function readDocument(name, callback) {
    const content = 'Hello World'
    callback(content)
}

//==================================================================================================
// Generics (Templates)
//==================================================================================================

// Defining types with generics
// - Parameterizes functions using the @template annotation to accept and return flexible types.

/**
 * Retrieves the first element from the array.
 * @template T The element type.
 * @param {T[]} array An array of the element type.
 * @returns {T} The first element of the array.
 */
function getFirstElement(array) {
    return array[0]
}

//==================================================================================================
// Importing Types
//==================================================================================================

// Importing types
// - Imports external type definitions from external modules or files using the import() syntax.

/**
 * Check if the employee has the admin role.
 * @param {import('../.resources/module.js').Employee} employee The employee.
 * @returns {boolean} True if the employee has the admin role.
 */
function isAdmin(employee) {
    return employee?.role === 'admin'
}

//==================================================================================================
// Inline Type Casting
//==================================================================================================

// Re-using types
// - References an existing function or type signature using the @type annotation.

/**
 * @type {isAdmin}
 */
function isAdministrator(employee) {
    return employee?.role === 'admin'
}

// Re-using property from type definition
// - Accesses specific property types directly from existing complex type definitions using bracket
//   notation.

/**
 * @type {User['isOverage']}
 */
function isOverage() {
    return true
}

export { }
