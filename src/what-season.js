import { NotImplementedError } from '../extensions/index.js';
const dictionary = {
  0: 'winter',
  1: 'spring',
  2: 'summer',
  3: 'autumn'
}

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }

  if (!(date instanceof Date)) {
    throw new Error('Invalid date!')
  }
  if (typeof date.getMonth !== 'function') {
    throw new Error('Invalid date!')
  }
  try {
    date.UTC()
  } catch {
    throw new Error('Invalid date!')
  }
  let seasonNumber = Math.floor(((date.getMonth() + 1) % 12) / 3)
  return dictionary[seasonNumber]
}

console.log(getSeason(new Date(2020, 5, 31)))