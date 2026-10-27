// Prototype
// - Creates new objects by cloning existing instances, bypassing the cost of traditional
//   instantiation and allowing dynamic configuration at runtime.

class Button {
    #label
    #edges
    constructor(label, edges) {
        this.#label = label
        this.#edges = edges
    }
    static clone(button) {
        return new Button(button.label, structuredClone(button.edges))
    }
    markup() {
        return `${this.#edges[0]}${this.#label}${this.#edges[1]}`
    }
    withLabel(label) {
        this.#label = label
        return this
    }
    get label() {
        return this.#label
    }
    get edges() {
        return this.#edges
    }
}

const yesBtn = new Button('Yes', ['[', ']'])
const noBtn = Button.clone(yesBtn).withLabel('No')
const cancelBtn = Button.clone(yesBtn).withLabel('Cancel')
console.log('Proceed?', yesBtn.markup(), noBtn.markup(), cancelBtn.markup())

// Output:
// Proceed? [Yes] [No] [Cancel]
