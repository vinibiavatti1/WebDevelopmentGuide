// Storage
// - Provides persistent and session-based client-side data storage solutions in the browser,
//   covering key-value web storage, document cookies, and asynchronous transactional databases.

//==================================================================================================
// Local & Session Storage
//==================================================================================================

// Local Storage Operations
// - Stores data persistently across browser sessions with no expiration date.
// - Max size: approximately 5MB.
// - Accepts and returns string key-value pairs only.
// - Output: John

localStorage.setItem('user', 'John')
console.log(localStorage.getItem('user'))
localStorage.removeItem('user')
localStorage.clear()

// Session Storage Operations
// - Stores data temporarily for the duration of the page session, clearing automatically when the
//   tab or browser is closed.
// - Max size: approximately 5MB.
// - Shares the exact same Web Storage API interface as localStorage.
// - Accepts and returns string key-value pairs only.
// - Output: John

sessionStorage.setItem('user', 'John')
console.log(sessionStorage.getItem('user'))
sessionStorage.removeItem('user')
sessionStorage.clear()

// Storing Objects
// - Since storages saves data as string, we can use JSON Serialization to save/load object data.
// - Output: { name: 'John', age: 30 }

let obj = { name: 'John', age: 30 }
localStorage.setItem('person', JSON.stringify(obj))
obj = JSON.parse(localStorage.getItem('person'))
console.log(obj)

//==================================================================================================
// Storage Event
//==================================================================================================

// Storage Event Listener
// - Listens for changes made to 'localStorage' or 'sessionStorage' in other tabs/windows.
// - Output: user updated

window.addEventListener('storage', event =>
    console.log(`${event.key} changed from ${event.oldValue} to ${event.newValue}`)
)
