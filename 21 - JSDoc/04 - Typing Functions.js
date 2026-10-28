// Typing Functions
// - Applies JSDoc syntax to document function parameters and return types for strict IntelliSense
//   support.

// @ts-check

//==================================================================================================
// Functions
//==================================================================================================

// Basic functions
// - Documents standard functions with parameters and return types.

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
// - Leverages the @throws annotation to document potential errors thrown during execution.

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
// - Utilizes Promise syntax to document asynchronous functions returning wrapped types.

/**
 * Fetches the user data.
 * @param {number} userId The user id.
 * @returns {Promise<string>} The user name.
 */
async function fetchUserName(userId) {
    return 'http://api.dev'
}

// Functions with callbacks
// - Employs function type signatures to document higher-order functions taking a callback
//   parameter.

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
// - Integrates arrow function syntax within JSDoc parameter annotations for higher-order functions.

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
// Callbacks
//==================================================================================================

// Callback definition
// - Defines a new callback function type using the @callback annotation.

/**
 * Define the ProcessFileContent callback.
 * @callback ProcessFileContent
 * @param {string} content The file content.
 */

// Using callback definition
// - References custom callback type names to identify variable and parameter types.

/**
 * Reads the document content.
 * @param {string} name The file name.
 * @param {ProcessFileContent} callback The function to process the content.
 */
function readDocument(name, callback) {
    const content = 'Hello World'
    callback(content)
}
