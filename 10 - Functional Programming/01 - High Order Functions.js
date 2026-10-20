// High Order Functions (HOF)
// - Functions that accept other functions as arguments, return functions, or both. They form the
//   core foundation of functional programming (FP), enabling behavior abstraction, delayed
//   execution, and reusable function composition.

//==================================================================================================
// Concepts
//==================================================================================================

// Function As Argument
// - Accepts another function as a parameter and invokes it, allowing behavior to be injected
//   dynamically.
// - Output: Hello World

const callFn = (fn) => {
    fn()
}
callFn(() => console.log('Hello World'))

// Function As Return
// - Returns a new function from within its body, enabling closures, factory patterns, and currying.
// - Output: Hello World

const returnFn = () => {
    return () => console.log('Hello World')
}
const fn = returnFn()
fn()
