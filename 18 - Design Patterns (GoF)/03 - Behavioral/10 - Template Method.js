// Template Method
// - Defines the skeleton of an algorithm in a base class method while deferring specific
//   implementation steps to subclasses, allowing derived classes to override exact behaviors
//   without altering the overarching control flow.

class EnemyAi {
    turn() {
        this.createUnits()
        this.buildStructures()
        this.collectResources()
    }
    createUnits() {
        console.log('Created units')
    }
    buildStructures() {
        console.log('Built structures')
    }
    collectResources() {
        console.log('Collected resources')
    }
}

class OrcsAi extends EnemyAi {
    createUnits() {
        console.log('Created orcs')
    }
    buildStructures() {
        console.log('Built a fort')
    }
    collectResources() {
        console.log('Collected gold')
    }
}
class HumansAi extends EnemyAi {
    createUnits() {
        console.log('Created warriors')
    }
}
class ElfsAi extends EnemyAi {
    createUnits() {
        console.log('Created elfs')
    }
    collectResources() {
        console.log('Collected wood')
    }
}

new OrcsAi().turn()
console.log('---')
new HumansAi().turn()
console.log('---')
new ElfsAi().turn()

// Output:
// Created orcs
// Built a fort
// Collected gold
// ---
// Created warriors
// Built structures
// Collected resources
// ---
// Created elfs
// Built structures
// Collected wood
