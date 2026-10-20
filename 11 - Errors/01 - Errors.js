// Errors
// - Demonstrates built-in errors, structured throwing, handling patterns, error wrapping via cause,
//   and custom Error classes.
// - Note: While JavaScript permits throwing any data type (e.g., strings, numbers, objects),
//   throwing instances of the Error class (or its subclasses) is the standard convention. Only
//   Error instances guarantee stack trace generation (stack), descriptive naming (name), and
//   standard API interoperability across loggers and frameworks.

//==================================================================================================
// Built-In Errors
//==================================================================================================

// Built In Errors:
// Error          - Generic base class for all standard runtime errors.
// TypeError      - Thrown when a value is not of the expected type or operation is invalid.
// RangeError     - Thrown when a numeric value or parameter falls outside its allowed range.
// ReferenceError - Thrown when attempting to access an undeclared or uninitialized variable.
// SyntaxError    - Thrown when parsing syntactically invalid code or JSON strings.
// URIError       - Thrown when URI encoding/decoding functions receive invalid parameters.
// EvalError      - Legacy error related to global eval() execution.
// AggregateError - Wraps multiple error instances into a single object (e.g., in Promise.any()).

//==================================================================================================
// Error Throwing/Handling
//==================================================================================================

// Throw
// - Instantiates and throws an error using the 'throw' keyword, immediately halting the current
//   execution flow and propagating the exception up the call stack.

function div(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('Invalid number')
    }
    if (y == 0) {
        throw new RangeError('Cannot divide by zero')
    }
    return x / y
}

// Try Catch
// - Intercepts thrown exceptions during synchronous execution inside the 'try' block, routing
//   them to the 'catch' clause to prevent application crashes and allow error inspection.
// - Output: RangeError | Cannot divide by zero | RangeError: Cannot divide by zero at div (...)

try {
    div(1, 0)
} catch (err) {
    console.error(err.name, err.message, err.stack)
}

// Try Catch (Multiple Errors)
// - Evaluates the specific type of caught error using 'instanceof' or 'err.name' to implement
//   granular, conditional error handling logic.
// - Output: Range error thrown

try {
    div(1, 0)
} catch (err) {
    if (err instanceof TypeError) {
        console.error('Type error thrown')
    } else if (err instanceof RangeError) {
        console.error('Range error thrown')
    }
}

// Throw (Rethrow)
// - Propagates an existing caught error upward without modification using a bare 'throw' statement,
//   allowing outer scopes or callers to handle or log it further.

try {
    div(1, 1)
} catch (err) {
    console.error(`Error encountered: ${err.message}`)
    throw err
}

// Try Catch Finally
// - (A PARITIR DAQUI) The 'finally' block is executed independently...
// - Executes the 'finally' block guaranteed after try/catch completion, regardless of outcome.
// - Output: Cannot divide by zero | finally

try {
    div(1, 0)
} catch (err) {
    console.error(err.message)
} finally {
    console.log('finally')
}

// Try Finally (Cleanup)
// - Combines a 'try' block with a 'finally' block for unconditional resource cleanup, letting
//   any thrown errors naturally propagate upward without being caught.
// - Output: operation | cleanup

try {
    console.log('operation')
} finally {
    console.log('cleanup')
}

//==================================================================================================
// Error Wrapping
//==================================================================================================

// Cause Attribute
// - Wraps a low-level caught error into a high-level contextual domain error using the ES2022
//   'cause' options property, preserving the original stack and error chain.

function calc(x, y) {
    try {
        return div(x, y)
    } catch (err) {
        throw new Error('Could not calc', { cause: err })
    }
}

// Example
// - Traverses the chained error tree via the 'err.cause' property to inspect the underlying root
//   cause alongside the high-level wrapper message.
// - Output: Could not calc -> Cannot divide by zero

try {
    calc(1, 0)
} catch (err) {
    console.error(err.message, '->', err.cause.message)
}

//==================================================================================================
// Custom Errors
//==================================================================================================

// Custom Error
// - Defines a domain-specific error class by extending the built-in 'Error' class, allowing
//   encapsulation of custom properties (like error codes) alongside standard attributes.

class CustomError extends Error {
    #code
    constructor(code, message, options) {
        super(message, options)
        this.name = 'CustomError'
        this.#code = code
    }
    get code() {
        return this.#code
    }
}

// Throw Custom Error
// - Instantiates and throws the specialized custom exception carrying domain-specific metadata.

function perform() {
    throw new CustomError(90001, 'Cannot execute this operation')
}

// Handle Custom Error
// - Catches the custom error subclass and extracts custom instance properties alongside standard
//   Error attributes.
// - Output: 90001 | CustomError | Cannot execute this operation

try {
    perform()
} catch (err) {
    console.error(err.code, err.name, err.message)
}

//==================================================================================================
// Capturing Unhandled Errors
//==================================================================================================

// Uncaught Exception
// - Listens for unhandled exceptions globally at the process level in Node.js to intercept crashes
//   and perform emergency logging before exit.
// - Note: While this prevents abrupt termination, best practices dictate logging the error and
//   gracefully shutting down the application state rather than keeping the process alive blindly.

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err.code, err.message)
    process.exit(1)
})

// Example
// - Triggers an asynchronous unhandled exception to test the process-level 'uncaughtException'
//   event.
// - Output: Uncaught Exception: 87000 Unknown error

setTimeout(() => { throw new CustomError(87000, 'Unknown error') }, 100)
