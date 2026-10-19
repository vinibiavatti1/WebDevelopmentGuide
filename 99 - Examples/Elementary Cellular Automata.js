// @ts-check

class ElementaryCellularAutomataError extends Error { }

/**
 * @typedef {Object} Rule
 * @property {boolean} b000
 * @property {boolean} b001
 * @property {boolean} b010
 * @property {boolean} b011
 * @property {boolean} b100
 * @property {boolean} b101
 * @property {boolean} b110
 * @property {boolean} b111
 * @property {(left: boolean, middle: boolean, right: boolean) => boolean} isAlive
 */

/**
 * @param {boolean} b000
 * @param {boolean} b001
 * @param {boolean} b010
 * @param {boolean} b011
 * @param {boolean} b100
 * @param {boolean} b101
 * @param {boolean} b110
 * @param {boolean} b111
 * @returns {Rule}
 */
const createRule = (b000, b001, b010, b011, b100, b101, b110, b111) => {
    const map = { b000, b001, b010, b011, b100, b101, b110, b111 }

    /**
     * @param {boolean} left
     * @param {boolean} middle
     * @param {boolean} right
     * @returns {boolean}
     */
    const isAlive = (left, middle, right) => {
        const leftBit = left ? '1' : '0'
        const middleBit = middle ? '1' : '0'
        const rightBit = right ? '1' : '0'
        return Reflect.get(map, 'b' + leftBit + middleBit + rightBit)
    }

    return {
        ...map,
        isAlive
    }
}

/**
 * @param {number} n
 * @returns {Rule}
 */
const parseRule = n => {
    if (!Number.isInteger(n) || n < 0 || n >= 256) {
        throw new ElementaryCellularAutomataError('Invalid rule number: ' + n)
    }
    const binaryRepr = n.toString(2).padStart(8, '0')
    return createRule(
        binaryRepr[7] === '1',
        binaryRepr[6] === '1',
        binaryRepr[5] === '1',
        binaryRepr[4] === '1',
        binaryRepr[3] === '1',
        binaryRepr[2] === '1',
        binaryRepr[1] === '1',
        binaryRepr[0] === '1',
    )
}

/**
 * @typedef {Object} ElementaryCellularAutomata
 * @property {() => void} reset
 * @property {(rule: Rule) => void} process
 * @property {(writer: (data: string) => void) => void} render
 * @property {(row: number, col: number, alive: boolean) => void} setCell
 * @property {(alive: string, dead: string) => void} setSymbols
 */

/**
 * @param {number} width
 * @param {number} height
 * @returns {ElementaryCellularAutomata}
 */
const createElementaryCellularAutomata = (width, height) => {
    /**
     * @type {boolean[][]}
     */
    let grid = []

    const symbols = {
        alive: '*',
        dead: ' '
    }

    /**
     * @param {string} alive
     * @param {string} dead
     */
    const setSymbols = (alive = '*', dead = ' ') => {
        symbols.alive = alive
        symbols.dead = dead
    }

    const reset = () => {
        grid = []
        for (let row = 0; row < height; row++) {
            const line = []
            for (let col = 0; col < width; col++) {
                line.push(false)
            }
            grid.push(line)
        }
    }

    /**
     * @param {number} row
     * @param {number} col
     * @returns {boolean}
     */
    const isValidCoords = (row, col) => row >= 0 && row < height && col >= 0 && col < width

    /**
     * @param {Rule} rule
     */
    const process = rule => {
        for (let row = 1; row < height; row++) {
            for (let col = 0; col < width; col++) {
                const [left, middle, right] = getTopCellsState(row, col)
                const alive = rule.isAlive(left, middle, right)
                grid[row][col] = alive
            }
        }
    }

    /**
     * @param {(data: string) => void} writer
     */
    const render = writer => {
        for (let row = 0; row < height; row++) {
            let line = ''
            for (let col = 0; col < width; col++) {
                line += grid[row][col] ? symbols.alive : symbols.dead
            }
            writer(line)
        }
    }

    /**
     * @param {number} row
     * @param {number} col
     * @returns {[boolean, boolean, boolean]}
     */
    const getTopCellsState = (row, col) => {
        const left = isValidCoords(row - 1, col - 1) ? grid[row - 1][col - 1] : false
        const middle = isValidCoords(row - 1, col) ? grid[row - 1][col] : false
        const right = isValidCoords(row - 1, col + 1) ? grid[row - 1][col + 1] : false
        return [left, middle, right]
    }

    /**
     * @param {number} row
     * @param {number} col
     * @param {boolean} alive
     */
    const setCell = (row, col, alive) => {
        if (!isValidCoords(row, col)) {
            throw new ElementaryCellularAutomataError(`Invalid coords: ${row}/${col}`)
        }
        grid[row][col] = alive
    }

    reset()

    return {
        reset,
        process,
        render,
        setCell,
        setSymbols,
    }
}

const game = createElementaryCellularAutomata(80, 30)
const rule = parseRule(30)
game.setCell(0, 40, true)
game.process(rule)
game.render(console.log)
