// Symbol
// - Represents a unique and immutable primitive value, primarily used as unique identifiers for
//   object properties to prevent naming collisions.

//==================================================================================================
// Declaration
//==================================================================================================

// Declaration
// - Direct assignment of a symbol using the 'Symbol' factory function with an optional description.
// - Output: Symbol(id)

let id = Symbol('id')
console.log(id)

/**
 * Unique
 * - Symbols are guaranteed to be unique. Even with the same description, they are never equal.
 * - Output: false (always)
 */
let id1 = Symbol('id')
let id2 = Symbol('id')
console.log(id1 === id2)

//==================================================================================================
// Parse & Format
//==================================================================================================

// Format
// - Converts the value into its string representation using the 'toString()' method.
// - Output: Symbol(id)

id = Symbol('id')
console.log(id.toString())


//==================================================================================================
// Operations
//==================================================================================================

// Description
// - Accessing the optional description string passed during creation via the 'description'
//   property.
// - Output: id

id = Symbol('id')
console.log(id.description)

// Hidden Key
// - Using symbols as object keys to make them hidden from standard iteration.
// - Output: [ 'name' ]

id = Symbol('id')
const obj = { name: 'John', [id]: 'secret' }
console.log(Object.keys(obj))

// Type Of
// - Checking if a value is strictly of type 'symbol' using the 'typeof' operator.
// - Output: true

id = Symbol('id')
console.log(typeof id === 'symbol')
