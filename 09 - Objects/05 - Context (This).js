// Context (This)
// - In JavaScript, the 'this' keyword refers to the execution context of a function. Its value is
//   determined dynamically at call-time (where and how the function is invoked), except for Arrow
//   Functions, which capture 'this' lexically.
// - Explicit Binding Utilities:
//   - call: Invokes the function immediately, setting 'this' and passing arguments individually.
//   - apply: Invokes the function immediately, setting 'this' and passing arguments as an Array.
//   - bind: Returns a new function with 'this' permanently bound, without invoking it immediately.

//==================================================================================================
// Implicit Context Binding
//==================================================================================================

// Implicit Binding
// - When a function is called as an object method ('greet()'), 'this' implicitly refers to the
//   object to the left of the dot.
// - Output: Hi, I am John

let person = {
    name: 'John',
    greet() {
        console.log(`Hi, I am ${this.name}`)
    }
}
person.greet()

//==================================================================================================
// Explicit Context Binding
//==================================================================================================

// Example of Context Lost
// - The example below shows a situation where the function loses the binding to 'this', since
//   standard functions create their own 'this' context when invoked independently.
// - Output: Hi, I am undefined

person = {
    name: 'John',
    greet() {
        function inner() {
            console.log(`Hi, I am ${this?.name}`)
        }
        inner() // <- Invoked standalone, 'this' is lost
    }
}
person.greet()

// Fixing With Arrow Functions
// - Arrow functions do not have their own 'this' binding. They capture 'this' lexically from the
//   surrounding scope. It means that converting the 'inner' function to an arrow function will keep
//   the binding to 'this'.
// - Output: Hi, I am John

person = {
    name: 'John',
    greet() {
        const inner = () => {
            console.log(`Hi, I am ${this?.name}`)
        }
        inner()
    }
}
person.greet()

// Fixing Using 'call' or 'apply'
// - The 'call' function invokes the function immediately, explicitly forcing its 'this' to match
//   the parent's 'this'.
// - Note: The 'apply' works identically to 'call', but receives extra arguments as an Array instead
//   of individual comma-separated values.
// - Output: Hi, I am John

person = {
    name: 'John',
    greet() {
        function inner() {
            console.log(`Hi, I am ${this?.name}`)
        }
        inner.call(this) // <- Executes immediately and binds current 'this' context
    }
}
person.greet()

// Fixing Using 'bind'
// - The 'bind' function creates and returns a new function with 'this' permanently bound to the
//   provided context.
// - It is usually used to determine the context ('this') of a function.
// - Output: Hi, I am John

person = {
    name: 'John',
    greet() {
        function inner() {
            console.log(`Hi, I am ${this?.name}`)
        }
        const boundInner = inner.bind(this) // <- Set context ('this') and return a new function
        boundInner()
    }
}
person.greet()

//==================================================================================================
// Important Notes
//==================================================================================================

// Detached Callback
// - Passing an object method directly as a callback function detaches it from its parent object.
// - In the example below, the greet function loses its context ('this') when passing directly. To
//   fix it, we can use encapsulate the operation with an arrow function.
// - Output: Hi, I am undefined | Hi, I am John

person = {
    name: 'John',
    greet() {
        console.log(`Hi, I am ${this?.name}`)
    }
}
setTimeout(person.greet, 0)         // <- Context Lost
setTimeout(() => person.greet(), 0) // <- Context Kept
