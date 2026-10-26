// Event-Driven Architecture (EDA)
// - An architectural pattern where system components communicate asynchronously by producing and
//   consuming events, decoupling the event producer from event consumers.
// - Diagram:
//   Request -> Controller -> (Async Event) -> Handlers -> Repository -> Database
// - Why use it:
//   - Decouples secondary side-effects (notifications, analytics) from core API workflows.
//   - Improves REST API response times by handling background tasks asynchronously.
//   - Allows adding new features (e.g., SMS alerts) without modifying existing service code.

import { EventEmitter } from "node:events"

//==================================================================================================
// Layers
//==================================================================================================

// Presentation Layer
// - Receives incoming requests and converts them into system events rather than direct calls.
// - Instantly acknowledges request receipt (e.g., 202 Accepted) without waiting for background
//   processing to finish.

class UserController {
    #emitter
    constructor(emitter) {
        this.#emitter = emitter
    }
    handleCreateUser(req) {
        this.#emitter.emit('user.creation.requested', req.body)
        return { status: 202, body: 'Accepted' }
    }
}

// Event Handlers Layer
// - Contains asynchronous consumers reacting independently to specific domain events.
// - Encapsulates primary domain rules (e.g., user creation) as well as isolated side-effects (e.g.,
//   auditing, notifications).

class UserHandler {
    #emitter
    #userRepository
    constructor(emitter, userRepository) {
        this.#emitter = emitter
        this.#userRepository = userRepository
        this.#emitter.on('user.creation.requested', userData => this.#handle(userData))
    }
    #handle(userData) {
        if (!userData.name) {
            throw new Error('Name is required')
        }
        const user = this.#userRepository.save(userData)
        emitter.emit('user.creation.completed', user)
        return user
    }
}

class AuditHandler {
    #emitter
    constructor(emitter, userRepository) {
        this.#emitter = emitter
        this.#emitter.on('user.creation.requested', userData => this.#handleCreation(userData))
        this.#emitter.on('user.creation.completed', user => this.#handleCompletion(user))
    }
    #handleCreation(userData) {
        console.log('Log: User creation requested:', userData.name)
    }
    #handleCompletion(user) {
        console.log('Log: User creation completed', user.id)
    }
}

// Persistence Layer
// - Abstracts data access logic, queries, and persistence contracts away from event consumers.

class UserRepository {
    #db
    constructor(db) {
        this.#db = db
    }
    save(userData) {
        return this.#db.insert(userData)
    }
}

// Database Layer
// - Handles raw storage operations, driver connections, and low-level data engine interactions.

class Database {
    insert(data) {
        return { id: 1, ...data }
    }
}

//==================================================================================================
// Application
//==================================================================================================

// Composition Root
// - Instantiates layers from the bottom up and wires dependencies explicitly via closure injection.

const emitter = new EventEmitter()
const db = new Database()
const userRepository = new UserRepository(db)
const userController = new UserController(emitter)

// Register Handlers
// - Binds event listeners to the shared event emitter during application initialization.

const userHandler = new UserHandler(emitter, userRepository)
const auditHandler = new AuditHandler(emitter)

// Request Execution
// - Dispatches a request that triggers non-blocking asynchronous event reactions across handlers.
// - Output:
//   Response: { status: 202, body: 'Accepted' }
//   Log: User creation requested: John Doe
//   Log: User creation completed 1

const req = { body: { name: 'John Doe' } }
const res = userController.handleCreateUser(req)
console.log('Response:', res)
