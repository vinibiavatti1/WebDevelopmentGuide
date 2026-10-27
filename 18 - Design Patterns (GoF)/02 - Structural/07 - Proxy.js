// Proxy
// - Controls direct access to a target object by providing a surrogate placeholder, intercepting
//   operations to manage instantiation, enforce security, or handle remote communication.

class Database {
    connect() {
        console.log('Connected')
    }
}

class DatabaseProtectionProxy {
    #db
    constructor(db) {
        this.#db = db
    }
    connect(login, password) {
        if (login !== 'admin' && password !== 'admin') {
            console.log('Forbidden')
        } else {
            console.log('Connected')
        }
    }
}

new Database().connect()
new DatabaseProtectionProxy(new Database()).connect('john', '123')

// Output:
// Connected
// Forbidden
