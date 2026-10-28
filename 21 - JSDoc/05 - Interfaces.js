// Interfaces
// - Establishes contracts and type structures using JSDoc annotations for class hierarchies.

// @ts-check

//==================================================================================================
// Interface Definition
//==================================================================================================

// Definition
// - Applies the @interface annotation to declare a base class acting as an interface contract.

/** @interface */
class Comparable {
    /**
     * Compare two objects.
     * @param {*} a The first object.
     * @param {*} b The second object.
     * @returns {number} 0, 1 or -1
     */
    compare(a, b) {
        throw new Error('Not implemented')
    }
}

//==================================================================================================
// Interface Implementation
//==================================================================================================

// Implementation
// - Utilizes the @implements annotation to fulfill an abstract base class or interface contract.

/** @implements {Comparable} */
class Person {
    #name
    /** @param {string} name  */
    constructor(name) {
        this.#name = name
    }
    get name() {
        return this.#name
    }
    /** @type {Comparable['compare']} */
    compare(a, b) {
        return a.name.localeCompare(b.name)
    }
}

export { }
