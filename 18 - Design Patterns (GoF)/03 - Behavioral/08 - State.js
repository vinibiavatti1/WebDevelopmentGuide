// State
// - Allows an object to fundamentally alter its internal behavior and runtime flow when its
//   underlying state changes, cleanly encapsulating state-specific logic into distinct,
//   interchangeable handler classes.

class Post {
    #state
    constructor() {
        this.#state = new DraftPostState(this)
    }
    publish() {
        this.#state.publish()
    }
    unpublish() {
        this.#state.unpublish()
    }
    delete() {
        this.#state.delete()
    }
    set state(state) {
        this.#state = state
    }
}

class DraftPostState {
    #post
    constructor(post) {
        this.#post = post
    }
    publish() {
        console.log('Post published')
        this.#post.state = new PublishedPostState(this.#post)
    }
    unpublish() {
        console.log('Cannot unpublish a draft post')
    }
    delete() {
        console.log('Post deleted')
        this.#post.state = new DeletedPostState(this.#post)
    }
}

class PublishedPostState {
    #post
    constructor(post) {
        this.#post = post
    }
    publish() {
        console.log('Cannot publish a published post')
    }
    unpublish() {
        console.log('Post unpublished')
        this.#post.state = new DraftPostState(this.#post)
    }
    delete() {
        console.log('Cannot delete a published post')
    }
}

class DeletedPostState {
    #post
    constructor(post) {
        this.#post = post
    }
    publish() {
        console.log('Cannot publish a deleted post')
    }
    unpublish() {
        console.log('Cannot unpublish a deleted post')
    }
    delete() {
        console.log('Cannot delete a deleted post')
    }
}

const post = new Post()
post.unpublish() // -> Cannot unpublish a draft post
post.publish()   // -> Post published
post.publish()   // -> Cannot publish a published post
post.unpublish() // -> Post unpublished
post.delete()    // -> Post deleted
post.publish()   // -> Cannot publish a deleted post
post.unpublish() // -> Cannot unpublish a deleted post
