import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let dict = {}
  for (let letter of str) {
    if (dict[letter]) {
      dict[letter] += 1
    }
    dict[letter] = 0
  }
  return dict
}

console.log(encodeLine('aabbbc'))
