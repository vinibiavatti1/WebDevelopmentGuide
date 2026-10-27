// Composite
// - Composes object hierarchies into recursive tree structures so that clients can interact with
//   individual leaf nodes and complex container branches uniformly through a shared interface.

class File {
    #name
    constructor(name) {
        this.#name = name
    }
    render(indent = '') {
        console.log(indent + this.#name)
    }
}

class Folder {
    #name
    #filesOrFolders
    constructor(name, ...filesOrFolders) {
        this.#name = name
        this.#filesOrFolders = filesOrFolders
    }
    render(indent = '') {
        console.log(indent + this.#name)
        this.#filesOrFolders.forEach(f => f.render(indent + '  '))
    }
}

const root = new Folder('root/',
    new Folder('src/',
        new File('main.js'),
        new File('test.js'),
    ),
    new Folder('res/',
        new File('img.png'),
        new File('ico.png'),
    ),
)

root.render()

// Output:
//   root/
//     src/
//       main.js
//       test.js
//     res/
//       img.png
//       ico.png
