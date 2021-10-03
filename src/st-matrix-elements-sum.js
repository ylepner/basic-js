import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  let sumOfEl = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        if (i != matrix.length - 1) {
          matrix[i + 1][j] = 0;
        }
      } else {
        sumOfEl += matrix[i][j]
      }
    }
  }
  return sumOfEl
}

let matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]

console.log(getMatrixElementsSum(matrix))