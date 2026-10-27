// Chain Of Responsibility
// - Passes requests along a dynamic chain of handler objects until one of them handles the request
//   or it reaches the end of the pipeline, decoupling the sender from multiple potential receivers.

class TextProcessor {
    constructor(next) {
        this.next = next
    }
    process(text) {
        throw new Error('Not implemented')
    }
}

class TrimProcessor extends TextProcessor {
    constructor(next) {
        super(next)
    }
    process(text) {
        text = text.trim()
        return this.next ? this.next.process(text) : text
    }
}
class UpperProcessor extends TextProcessor {
    constructor(next) {
        super(next)
    }
    process(text) {
        text = text.toUpperCase()
        return this.next ? this.next.process(text) : text
    }
}
class DotProcessor extends TextProcessor {
    constructor(next) {
        super(next)
    }
    process(text) {
        text = text + '.'
        return this.next ? this.next.process(text) : text
    }
}

const textProcessor =
    new TrimProcessor(
        new UpperProcessor(
            new DotProcessor(null)
        )
    )
const text = textProcessor.process(' hello world ')
console.log(text)

// Output: HELLO WORLD.
