// Abstract Factory
// - Provides an interface for creating families of related or dependent objects without specifying
//   their concrete classes, ensuring architectural consistency across product variants.

class FlatComponentFactory {
    buildButton(label) { return `[${label}]` }
    buildInput(label) { return `${label}: [______]` }
}

class RoundedComponentFactory {
    buildButton(label) { return `(${label})` }
    buildInput(label) { return `${label}: (______)` }
}

class Form {
    #componentFactory
    constructor(componentFactory) {
        this.#componentFactory = componentFactory
    }
    show() {
        console.log(
            this.#componentFactory.buildInput('Enter your name'),
            this.#componentFactory.buildButton('Submit')
        )
    }
}

new Form(new FlatComponentFactory()).show()
new Form(new RoundedComponentFactory()).show()

// Output:
// Enter your name: [______] [Submit]
// Enter your name: (______) (Submit)
