// Facade
// - Provides a simplified, high-level interface to a complex subsystem of classes, frameworks, or
//   libraries, shielding client code from intricate internal dependencies and low-level wiring.

class InventoryService {
    checkStock(item) {
        console.log('Checking stock for item:', item)
    }
}

class PaymentService {
    processPayment(amount, customer) {
        console.log('Processing', amount, 'from', customer)
    }
}

class ShippingService {
    shipItem(item, address) {
        console.log('Shipping', item, 'to', address)
    }
}

class OrderService { // <- Facade
    #inventoryService
    #paymentService
    #shippingService
    constructor(inventoryService, paymentService, shippingService) {
        this.#inventoryService = inventoryService
        this.#paymentService = paymentService
        this.#shippingService = shippingService
    }
    processOrder(item, amount, customer, address) {
        this.#inventoryService.checkStock(item)
        this.#paymentService.processPayment(amount, customer)
        this.#shippingService.shipItem(item, address)
    }
}

new OrderService(
    new InventoryService(),
    new PaymentService(),
    new ShippingService()
).processOrder('Computer', 4000, 'John', 'Main Street 123')

// Output:
// Checking stock for item: Computer
// Processing 4000 from John
// Shipping Computer to Main Street 123
