// Factory Method
// - Delegates object creation to subclasses by defining a common interface, allowing concrete
//   classes to decide which specific type to instantiate.

class Dialog {
    buildButton(label) { // <- Factory Method
        throw new Error('Not implemented')
    }
    show() {
        console.log('Are you sure?', this.buildButton('Yes'), this.buildButton('No'))
    }
}

class FlatDialog extends Dialog {
    buildButton(label) {
        return `[${label}]`
    }
}

class RoundedDialog extends Dialog {
    buildButton(label) {
        return `(${label})`
    }
}

new FlatDialog().show()
new RoundedDialog().show()

// Output:
// Are you sure? (Yes) (No)
// Are you sure? (Yes) (No)
