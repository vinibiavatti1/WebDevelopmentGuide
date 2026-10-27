// Adapter
// - Bridges incompatible interfaces by wrapping an existing class, allowing classes to work
//   together seamlessly without modifying their source code.

class LegacyLogger {
    log(type, message) {
        console.log(type, message)
    }
}

class ModernLogger {
    info(message) {
        console.log('info:', message)
    }
    error(message) {
        console.log('error:', message)
    }
}

class LegacyToModernLoggerAdapter {
    #legacyLogger
    constructor(legacyLogger) {
        this.#legacyLogger = legacyLogger
    }
    info(message) {
        this.#legacyLogger.log('info:', message)
    }
    error(message) {
        this.#legacyLogger.log('error:', message)
    }
}

class ModernToLegacyLoggerAdapter {
    #modernLogger
    constructor(modernLogger) {
        this.#modernLogger = modernLogger
    }
    log(type, message) {
        if (type === 'info') {
            this.#modernLogger.info(message)
        } else {
            this.#modernLogger.error(message)
        }
    }
}

const adapter1 = new LegacyToModernLoggerAdapter(new LegacyLogger())
const adapter2 = new ModernToLegacyLoggerAdapter(new ModernLogger())
adapter1.info('Hello World')
adapter2.log('info', 'Hello World')

// Output:
// info: Hello World
// info: Hello World
