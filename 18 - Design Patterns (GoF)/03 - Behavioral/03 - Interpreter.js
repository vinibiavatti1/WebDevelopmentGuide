// Interpreter
// - Defines a grammatical representation for a language along with an interpreter that uses the
//   representation to evaluate expressions. Nodes are constructed via composite factory functions
//   that share a unified AST node interface.

class VarExpression {
    #name
    constructor(name) {
        this.#name = name
    }
    evaluate(ctx) {
        return ctx[this.#name]
    }
    toString() {
        return this.#name
    }
}

class ConstExpression {
    #value
    constructor(value) {
        this.#value = value
    }
    evaluate(ctx) {
        return this.#value
    }
    toString() {
        return this.#value.toString()
    }
}

class AddExpression {
    #exp1
    #exp2
    constructor(exp1, exp2) {
        this.#exp1 = exp1
        this.#exp2 = exp2
    }
    evaluate(ctx) {
        return this.#exp1.evaluate(ctx) + this.#exp2.evaluate(ctx)
    }
    toString() {
        return '(' + this.#exp1.toString() + '+' + this.#exp2.toString() + ')'
    }
}

class MulExpression {
    #exp1
    #exp2
    constructor(exp1, exp2) {
        this.#exp1 = exp1
        this.#exp2 = exp2
    }
    evaluate(ctx) {
        return this.#exp1.evaluate(ctx) * this.#exp2.evaluate(ctx)
    }
    toString() {
        return '(' + this.#exp1.toString() + '*' + this.#exp2.toString() + ')'
    }
}

const evaluator = new AddExpression(
    new AddExpression(
        new MulExpression(
            new VarExpression('a'),
            new VarExpression('a')
        ),
        new MulExpression(
            new VarExpression('b'),
            new VarExpression('b')
        )
    ),
    new MulExpression(
        new ConstExpression(2),
        new MulExpression(
            new VarExpression('a'),
            new VarExpression('b')
        )
    )
)

const ctx = { a: 5, b: 5 }
const result = evaluator.evaluate(ctx)
console.log(evaluator.toString())
console.log(result)

// Output:
// (((a*a)+(b*b))+(2*(a*b)))
// 100
