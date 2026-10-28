// Abstract Classes
// - Leverages JSDoc annotations to establish blueprint classes with uninstantiable structures and
//   mandatory methods.

// @ts-check

//==================================================================================================
// Abstract Class Definition
//==================================================================================================

// Definition
// - Utilizes the @abstract annotation for methods that lack a body and MUST be implemented by
//   subclasses, and @virtual for methods that provide a default implementation but CAN be
//   optionally overridden.

/** @abstract */
class AbstractOrder {
    #id
    /** @param {number} id  */
    constructor(id) {
        this.#id = id
    }
    /** @abstract */
    process() {
        throw new Error('Not implemented')
    }
    /** @virtual */
    repr() {
        return `Order: ${this.#id}`
    }
}

//==================================================================================================
// Abstract Class Implementation
//==================================================================================================

// Implementation
// - Inherits from the abstract base class and provides concrete implementations for required
//   abstract methods.

class Order extends AbstractOrder {
    /** @param {number} id  */
    constructor(id) {
        super(id)
    }
    process() {
        console.log('Order processed successfully')
    }
}

// Usage Example
// - Instantiates the concrete subclass to demonstrate inheritance, method execution, and virtual
//   inheritance output.
// - Output: Order processed successfully | Order: 1

const order = new Order(1)
order.process()
console.log(order.repr())
