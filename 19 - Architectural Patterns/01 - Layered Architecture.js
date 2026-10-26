// Layered Architecture
// - An architectural pattern that organizes code into horizontal layers, where each layer has a
//   single responsibility and only interacts with the adjacent lower layer.
// - Diagram:
//   Request -> Presentation Layer -> Business Layer -> Persistence Layer -> Database Layer
// - Why use it:
//   - Decouples business rules from external technologies (I/O, Frameworks, Databases).
//   - Improves maintainability, readability, and unit testability.
//   - Solves code spaghetti by strictly separating concerns across well-defined boundaries.

//==================================================================================================
// Layers
//==================================================================================================

// Presentation Layer
// - Acts as the entry point for external interactions (HTTP REST controllers, CLI scripts, etc.).
// - Translates incoming transport payloads, triggers business execution, and returns formatted
//   responses.

class UserController {
    #userService
    constructor(userService) {
        this.#userService = userService
    }
    handleCreateUser(req) {
        const user = this.#userService.registerUser(req.body)
        return { status: 201, body: user }
    }
}

// Business Layer
// - Contains pure domain logic, rules, constraints, and workflow orchestration.
// - Operates independently of databases, UI elements, or transport protocols.

class UserService {
    #userRepository
    constructor(userRepository) {
        this.#userRepository = userRepository
    }
    registerUser(userData) {
        if (!userData.name) {
            throw new Error('Name is required')
        }
        return this.#userRepository.save(userData)
    }
}

// Persistence Layer
// - Abstracts data access logic, queries, and persistence contracts away from domain logic.

class UserRepository {
    #db
    constructor(db) {
        this.#db = db
    }
    save(userData) {
        return this.#db.insert('users', userData)
    }
}

// Database Layer
// - Handles raw storage operations, driver connections, and low-level data engine interactions.

class Database {
    insert(table, data) {
        return { id: 1, ...data }
    }
}

//==================================================================================================
// Application
//==================================================================================================

// Composition Root
// - Instantiates layers from the bottom up and wires dependencies explicitly via closure injection.

const db = new Database()
const userRepository = new UserRepository(db)
const userService = new UserService(userRepository)
const userController = new UserController(userService)

// Request Execution
// - Triggers an end-to-end operation flowing down through Presentation, Business, and Persistence
//   layers.
// - Output: Response: { status: 201, body: { id: 1, name: 'John Doe' } }

const req = { body: { name: 'John Doe' } }
const res = userController.handleCreateUser(req)
console.log('Response:', res)
