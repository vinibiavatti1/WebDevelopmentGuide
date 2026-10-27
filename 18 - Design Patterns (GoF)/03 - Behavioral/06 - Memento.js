// Memento
// - Captures and externalizes an object's internal state without violating encapsulation, allowing
//   the system to snapshot and restore the object to its previous condition for reliable rollback
//   and undo mechanisms.

class TextEditorMemento {
    #title
    #content
    constructor(title, text) {
        this.#title = title
        this.#content = text
    }
    get title() {
        return this.#title
    }
    get content() {
        return this.#content
    }
}

class TextEditor {
    #title = '(empty)'
    #content = '(empty)'
    snapshot() {
        return new TextEditorMemento(this.#title, this.#content)
    }
    restore(snapshot) {
        this.#title = snapshot.title
        this.#content = snapshot.content
    }
    set title(title) {
        this.#title = title
    }
    set content(text) {
        this.#content = text
    }
    get title() {
        return this.#title
    }
    get content() {
        return this.#content
    }
}

class TextEditorHistory {
    #textEditor
    #history = []
    constructor(textEditor) {
        this.#textEditor = textEditor
        this.save()
    }
    save() {
        this.#history.push(this.#textEditor.snapshot())
    }
    undo() {
        if (this.#history.length > 0) {
            const snapshot = this.#history.pop()
            this.#textEditor.restore(snapshot)
            console.log('Restored:', snapshot.title, '-', snapshot.content)
        }
    }
}

const editor = new TextEditor()
const history = new TextEditorHistory(editor)

editor.title = 'The Javascript Lang'
history.save()

editor.content = 'The history of'
history.save()

editor.content += ' the Javascript language'
history.save()

editor.content += ' is awesome!'
history.save()

history.undo()
history.undo()
history.undo()
history.undo()
history.undo()

// Output:
// Restored: The Javascript Lang - The history of the Javascript language is awesome!
// Restored: The Javascript Lang - The history of the Javascript language
// Restored: The Javascript Lang - The history of
// Restored: The Javascript Lang - (empty)
// Restored: (empty) - (empty)
