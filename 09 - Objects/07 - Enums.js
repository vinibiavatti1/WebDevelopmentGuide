// Enums
// - Enums represent a discrete set of named constant values. While JavaScript does not have native
//   enum syntax, frozen objects are usually used to declare enums.

//==================================================================================================
// Declaration
//==================================================================================================

// Declaration
// - Defines a frozen object literal representing a discrete set of constant key-value pairs.
// - Output: { RED: '#ff0000', GREEN: '#00ff00', BLUE: '#0000ff' }

const Colors = Object.freeze({
    RED: '#ff0000',
    GREEN: '#00ff00',
    BLUE: '#0000ff',
})
console.log(Colors)

//==================================================================================================
// Operations
//==================================================================================================

// Iterate Key-Values
// - Iterates over the enum's entries using Object.entries() to access both keys and values.
// - Output: RED #ff0000 | GREEN #00ff00 | BLUE #0000ff

for (const [key, val] of Object.entries(Colors)) {
    console.log(key, val)
}

// Lookup by Name
// - Accesses a specific enum constant directly by its key using standard dot or bracket notation.
// - Output: #ff0000

console.log(Colors.RED)

// Lookup by Value
// - Finds the enum key (name) corresponding to a specific target value using Object.keys() and
//   Array.prototype.find().
// - Output: GREEN

const targetValue = '#00ff00'
const colorKey = Object.keys(Colors).find(key => Colors[key] === targetValue)
console.log(colorKey)

// Has
// - Safely checks if a specific key exists on the frozen enum object using Object.hasOwn().
// - Output: true

console.log(Object.hasOwn(Colors, 'BLUE'))
