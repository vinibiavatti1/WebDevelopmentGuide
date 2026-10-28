// Typing Objects
// - We can use @property annotations to document object structures and their properties.

// @ts-check

//==================================================================================================
// Objects
//==================================================================================================

// Objects
// - Documents standard object literals containing properties and methods using object type syntax.

/**
 * User data.
 * @property {string} name The user name.
 * @property {number} age The user age.
 * @property {(surname: string) => string} fullName Get full name.
 */
let userData = {
    name: 'John',
    age: 30,
    /** @param {string} surname */
    fullName(surname) {
        return this.name + surname
    }
}

// Read-only Objects
// - Leverages the @readonly annotation for immutable objects frozen against runtime modifications.

/**
 * Config object.
 * @readonly
 */
const CONFIG = Object.freeze({
    timeout: 1200
})

//==================================================================================================
// Enums
//==================================================================================================

// Enums
// - Applies the @enum annotation to document constant enumeration maps with type safety.

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

export { }
