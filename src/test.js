// @ts-check
let x = [1, 2, 3, 4]
let y = [5, 6, 7, 8]
let z = [...x, ...y]
console.log(x, y, z)

/**
 *
 * @param {Array} arg
 */
let func = function (...arg) { console.log(arg) }
// func.apply(null, z)
// func.bind(null, z)
func(1)

let h = [3, 4]
console.log(Math.max(...h))
