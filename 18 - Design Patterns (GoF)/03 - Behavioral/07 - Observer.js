// Observer
// - Establishes a one-to-many subscription mechanism between a subject and multiple dependent
//   listeners, automatically notifying and updating all observers whenever the subject undergoes
//   state changes.

class OrderService {
    #listeners = new Set()
    subscribe(handler) {
        this.#listeners.add(handler)
        return () => this.#listeners.delete(handler)
    }
    processOrder(id) {
        console.log('Order processed!')
        this.#listeners.forEach(handler => handler.update({ status: 'success' }))
    }
}

class MetricsService {
    update(data) {
        console.log('Metrics Service Received:', data.status)
    }
}

const orderService = new OrderService()
const metricsService = new MetricsService()
orderService.subscribe(metricsService)
orderService.processOrder(1)

// Output:
// Order processed!
// Metrics Service Received: success
