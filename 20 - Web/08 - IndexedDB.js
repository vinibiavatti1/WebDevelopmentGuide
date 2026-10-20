// IndexedDB
// - IndexedDB is a low-level asynchronous transactional NoSQL database API built into the browser.
//   It enables client-side storage of large amounts of structured data, including files and blobs,
//   using indexes to enable high-performance searches.

//==================================================================================================
// Database Connection & Schema Setup
//==================================================================================================

// Open Database & Store Creation
// - Opens or creates a database with a specified version.

const request = indexedDB.open('AppDatabase', 1)

// Store Creation
// - The 'onupgradeneeded' event executes only when creating a database or incrementing its version,
//   serving as the schema migration hook where object stores (tables) and indexes are created.

request.onupgradeneeded = event => {
    const db = event.target.result
    if (!db.objectStoreNames.contains('users')) {
        const userStore = db.createObjectStore('users', { keyPath: 'id' })
        userStore.createIndex('emailIndex', 'email', { unique: true })
    }
}

//==================================================================================================
// CRUD Operations
//==================================================================================================

// On Success
// - Fires when the database connection opens successfully, providing access to the IDBDatabase
//   instance to perform transactions and CRUD operations.

request.onsuccess = event => {
    const db = event.target.result

    // Add
    // - Opens a 'readwrite' transaction to add a new record to the object store.
    // - Output: Record created successfully

    let trans = db.transaction('users', 'readwrite')
    let store = addTx.objectStore('users')
    let op = addStore.add({ id: 1, name: 'John', email: 'john@example.com' })
    op.onsuccess = () => console.log('Record created successfully')

    // Get
    // - Retrieves a record by its primary key ('keyPath').
    // - Output: John

    trans = db.transaction('users', 'readonly')
    store = getTx.objectStore('users')
    op = getStore.get(1)
    op.onsuccess = () => console.log(getReq.result.name)

    // Put
    // - Updates an existing record or creates it if the primary key does not exist.
    // - Output: Record updated

    trans = db.transaction('users', 'readwrite')
    store = updateTx.objectStore('users')
    op = updateStore.put({ id: 1, name: 'Jane', email: 'john@example.com' })
    op.onsuccess = () => console.log('Record updated')

    // Delete
    // - Removes a record from the store by its primary key.
    // - Output: Record deleted

    trans = db.transaction('users', 'readwrite')
    store = deleteTx.objectStore('users')
    op = deleteStore.delete(1)
    op.onsuccess = () => console.log('Record deleted')
}

// On Error
// - Triggers if database opening fails due to user permission denial or storage quota issues.

request.onerror = event => console.error('Database error:', event.target.error)
