// Command
// - Encapsulates a request as a standalone object containing all information needed to execute or
//   queue an action, enabling operation parametrization, undoable actions, and macro recording.

class ImageProcessor {
    resize(width, height) {
        console.log('Resizing...', width, 'x', height)
    }
    export(destination) {
        console.log('Exporting...', destination)
    }
}

class ResizeCommand {
    #receiver
    #width
    #height
    constructor(receiver, width, height) {
        this.#receiver = receiver;
        this.#width = width;
        this.#height = height;
    }
    execute() {
        this.#receiver.resize(this.#width, this.#height);
    }
}

class ExportCommand {
    #receiver
    #destination
    constructor(receiver, destination) {
        this.#receiver = receiver;
        this.#destination = destination;
    }
    execute() {
        this.#receiver.export(this.#destination);
    }
}

const imgProcessor = new ImageProcessor()
new ResizeCommand(imgProcessor, 800, 600).execute()
new ExportCommand(imgProcessor, 'C:/images').execute()

// Output:
// Resizing... 800 x 600
// Exporting... C:/images
