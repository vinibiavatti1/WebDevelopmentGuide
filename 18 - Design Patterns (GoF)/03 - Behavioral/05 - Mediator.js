// Mediator
// - Encapsulates and centralizes complex communication pathways and coordination workflows between
//   multiple objects, preventing tight coupling by ensuring they communicate exclusively through
//   the intermediary.

class Form {
    #textarea
    #resetButton
    constructor() {
        this.#textarea = new Textarea(this)
        this.#resetButton = new Button(this)
    }
    notify(event) {
        console.log('Processing event:', event)
        if (event === 'reset') {
            this.#textarea.text = '(empty)'
        }
    }
    get textarea() {
        return this.#textarea
    }
    get resetButton() {
        return this.#resetButton
    }
}

class Textarea {
    #text = '(empty)'
    #mediator
    constructor(mediator) {
        this.#mediator = mediator
    }
    set text(text) {
        this.#text = text
    }
    get text() {
        return this.#text
    }
}

class Button {
    #mediator
    constructor(mediator) {
        this.#mediator = mediator
    }
    click() {
        this.#mediator.notify('reset')
    }
}

const form = new Form()
form.textarea.text = 'Hello World'
form.resetButton.click()
console.log(form.textarea.text)

// Output:
// Processing event: reset
// (empty)
