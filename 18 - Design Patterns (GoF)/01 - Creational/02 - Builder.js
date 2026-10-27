// Builder
// - Constructs complex objects step-by-step using a fluent interface, decoupling the construction
//   process from the object's final representation.

class Query {
    constructor(table, fields, where) {
        this.table = table
        this.fields = fields
        this.where = where
    }
}

class DatabaseQueryBuilder {
    #table = ''
    #fields = []
    #where = []
    select(...fields) {
        this.#fields = fields
        return this
    }
    from(table) {
        this.#table = table
        return this
    }
    where(column, operator, value) {
        this.#where = [column, operator, value]
        return this
    }
    build() {
        return new Query(this.#table, this.#fields, this.#where)
    }
}

const query = new DatabaseQueryBuilder()
    .select('name', 'age')
    .from('users')
    .where('name', '=', 'John')
    .build()

console.log('Table:', query.table)
console.log('Fields:', query.fields)
console.log('Where:', query.where)

// Output:
// Table: users
// Fields: [ 'name', 'age' ]
// Where: [ 'name', '=', 'John' ]
