// Decorator
// - Dynamically attaches new behaviors and responsibilities to an object by wrapping it in wrapper
//   classes that share the same interface, providing a flexible alternative to subclassing.

class HttpClient {
    request(url) {
        console.log('requesting...')
    }
}

class HttpClientLoggerDecorator {
    #httpClient
    constructor(httpClient) {
        this.#httpClient = httpClient
    }
    request(url) {
        console.log('Executing request to:', url)
        this.#httpClient.request(url)
        console.log('Done.')
    }
}

new HttpClient().request('http://api.dev')
console.log('---')
new HttpClientLoggerDecorator(new HttpClient()).request('http://api.dev')

// Output:
// requesting...
// ---
// Executing request to: http://api.dev
// requesting...
// Done.
