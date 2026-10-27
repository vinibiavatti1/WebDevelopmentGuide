// Bridge
// - Separates an abstraction layer from its implementation hierarchy, allowing both dimensions to
//   evolve independently through clean composition and delegation rather than rigid class
//   inheritance.


class ConsoleWriter {
    write(data) {
        console.log(data)
    }
}

/* >--- Bridge ---< */

class Logger {
    #consoleWriter
    constructor(consoleWriter) {
        this.#consoleWriter = consoleWriter
    }
    log(message) {
        this.#consoleWriter.write(message)
    }
}

new Logger(new ConsoleWriter()).log('Hello World')

// Output: Hello World
