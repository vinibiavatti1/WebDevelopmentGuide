// Flyweight
// - Minimizes memory overhead and optimizes performance by sharing fine-grained state efficiently
//   across massive collections of similar objects, separating intrinsic shared data from extrinsic
//   context.

class TextureCache {
    #cache
    constructor() {
        this.#cache = new Map()
    }
    get(key, resolver) {
        if (this.#cache.has(key)) {
            return this.#cache.get(key)
        }
        this.#cache.set(key, resolver())
        return this.#cache.get(key)
    }
}

class Sprite {
    #texture
    constructor(texture) {
        this.#texture = texture
    }
    get texture() {
        return this.#texture
    }
}

const textureCache = new TextureCache()
const tree1 = new Sprite(textureCache.get('tree', () => [1, 2, 3]))
const tree2 = new Sprite(textureCache.get('tree', () => [1, 2, 3]))
const rock1 = new Sprite(textureCache.get('rock', () => [4, 5, 6]))
const rock2 = new Sprite(textureCache.get('rock', () => [4, 5, 6]))
console.log(tree1.texture === tree2.texture)
console.log(rock1.texture === rock2.texture)

// Output:
// true
// true
