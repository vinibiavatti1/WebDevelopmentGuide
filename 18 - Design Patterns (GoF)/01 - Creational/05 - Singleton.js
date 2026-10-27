// Singleton
// - Restricts class instantiation to a single shared instance globally, providing a controlled
//   access point while managing internal state consistency.

class Database {
    static instance = null
    constructor() {
        if (Database.instance) {
            return Database.instance
        }
        Database.instance = this
        return this
    }
}

const db1 = new Database()
const db2 = new Database()
console.log(db1 === db2)

// Output:
// true
