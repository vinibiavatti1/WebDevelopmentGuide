// Strategy
// - Defines a family of interchangeable algorithms, encapsulates each one into a separate class,
//   and allows client code to swap algorithms dynamically at runtime without altering the context
//   that uses them.

class EvenChecker {
    #strategy
    constructor(strategy) {
        this.#strategy = strategy
    }
    check(n) {
        return this.#strategy.check(n)
    }
}

class ArithmeticStrategy {
    check(n) {
        return n % 2 === 0
    }
}

class BitwiseStrategy {
    check(n) {
        return (n & 1) === 0
    }
}

console.log(new EvenChecker(new ArithmeticStrategy()).check(2))
console.log(new EvenChecker(new BitwiseStrategy()).check(2))

// Output:
// true
// true
