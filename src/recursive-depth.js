import { NotImplementedError } from '../extensions/index.js';


/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    for (let el of arr) {
      if (Array.isArray(el)) {
        depth = Math.max(depth, this.calculateDepth(el) + 1)
      }
    }
    return depth
  }
}


