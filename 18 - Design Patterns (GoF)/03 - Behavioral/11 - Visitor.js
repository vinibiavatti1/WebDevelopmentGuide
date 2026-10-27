// Visitor
// - Separates algorithms from the object structures on which they operate by introducing a visitor
//   object, allowing new operations to be added to existing hierarchies without modifying the
//   classes of the elements they traverse.

class TextElement {
    #text
    constructor(text) {
        this.#text = text
    }
    accept(visitor) {
        return visitor.visitText(this)
    }
    get text() {
        return this.#text
    }
}

class ImageElement {
    #url
    constructor(url) {
        this.#url = url
    }
    accept(visitor) {
        return visitor.visitImage(this)
    }
    get url() {
        return this.#url
    }
}

class HtmlExportVisitor {
    visitText(element) {
        return `<p>${element.text}</p>`
    }
    visitImage(element) {
        return `<img src="${element.url}" />`
    }
}

const text = new TextElement('Hello World')
const img = new ImageElement('http://image.com')
const visitor = new HtmlExportVisitor()
console.log(text.accept(visitor))
console.log(img.accept(visitor))

// Output:
// <p>Hello World</p>
// <img src="http://image.com" />
