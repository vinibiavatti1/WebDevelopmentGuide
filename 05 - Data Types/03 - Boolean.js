// Boolean
// - Represents a logical entity and can have two values: 'true' and 'false'. Often used in
//   conditional testing and flow control.

//==================================================================================================
// Declaration
//==================================================================================================

// Declaration
// - Direct assignment of boolean literal values.
// - Output: true false

let b1 = true
let b2 = false
console.log(b1, b2)

//==================================================================================================
// Parse & Format
//==================================================================================================

// Parse
// - Wen can parse a string into a boolean by checking the string content.
// - Output: true

let is = 'true'
console.log(is === 'true')

// Format
// - Converts the value into its string representation using the 'toString()' method.
// - Output: true

is = true
console.log(is.toString())

//==================================================================================================
// Operations
//==================================================================================================

// Casting
// - Converting truthy/falsy values into strict booleans using the double NOT operator ('!!') or the
//   'Boolean()' constructor.
// - Output: true true

b1 = !!'hello'
b2 = Boolean('hello')
console.log(b1, b2)

// Type Of
// - Checking if a value is strictly of type 'boolean' using the 'typeof' operator.
// - Output: true

is = true
console.log(typeof is === 'boolean')

// Truthy and Falsy
// - Values that evaluate to 'false' in a boolean context are called 'falsy'. Everything else is
//   considered 'truthy'.
// - Note: Empty array ([]), empty object ({}), string with spaces (' '), etc, are considered
//   'truthy'.
// - Output: false (for all cases)

console.log(
    Boolean(false),     // false
    Boolean(0),         // false
    Boolean(-0),        // false
    Boolean(0n),        // false
    Boolean(''),        // false
    Boolean(null),      // false
    Boolean(undefined), // false
    Boolean(NaN),       // false
)
