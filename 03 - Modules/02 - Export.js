// Export
// - Exports are used in ECMAScript Modules (ESM) to make functions, objects, or primitives
//   available to other files or modules via import statements.

//==================================================================================================
// Export Types
//==================================================================================================

// Named Exports
// - Allows multiple exports per module.
// - Each exported item must be imported using its exact name (or aliased using 'as').

export let person = 'John'

// Default Export
// - Defines a primary export for the module. A module can have ONLY ONE default export.
// - When imported, the receiving file can assign any name to it without curly braces.
// - Note: JavaScript does NOT allow "export default const x = 1" directly on a single line
//   because variable declarations can contain multiple items (e.g., const a = 1, b = 2),
//   which would break the parser's syntax rules.

const TIMEOUT = 100
export default TIMEOUT

// Export Collection
// - Exports a collection (object) of pre-defined variables, functions, or objects from the module
//   scope.

let findById = () => { }
let findByName = () => { }
export {
    findById,
    findByName
}

// Examples
// - Below is a list of the various kinds of resources that can be exported directly.

export const x = 1
export let y = 2
export var z = 3
export function func() { }
export class Clazz { }
