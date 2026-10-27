// Iterator
// - Provides a way to access the elements of an aggregate object sequentially without exposing its
//   underlying representation. Leverages ES6+ generator functions and the native 'Symbol.iterator'
//   protocol to make custom objects iterable.

class List {
    #items
    constructor(...items) {
        this.#items = items
    }
    *[Symbol.iterator]() {
        for (const item of this.#items) {
            yield item
        }
    }
}

const list = new List('A', 'B', 'C')
for (const item of list) {
    console.log(item)
}

// Output:
// A
// B
// C
