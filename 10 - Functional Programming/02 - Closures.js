// Closures
// - A closure is a fundamental runtime behavior in JavaScript where an inner function retains
//   access to its outer (lexical) scope's variables, even after the outer function has finished
//   executing.

//==================================================================================================
// Declaration & Usage
//==================================================================================================

// Declaration
// - Defines a factory function that encapsulates private state ('count') within its lexical scope
//   and returns methods that maintain a live reference to it via closure.

const createCounter = () => {
    let count = 0 // <- Enclosed outer variable (persists in memory via closure)
    return {
        increment: () => console.log(++count),
        decrement: () => console.log(--count),
    }
}

// Usage
// - Instantiates the counter closure and invokes its methods to mutate and read the persistent
//   private state across independent calls.
// - Output: 1 | 2 | 1

const counter = createCounter()
counter.increment()
counter.increment()
counter.decrement()
