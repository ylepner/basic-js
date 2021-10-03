import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  for (let i = email.length; i >= 0; i--) {
    if (email[i] === '@') {
      return email.substr(i + 1);
    }
  }
}

console.log(getEmailDomain('very.unusual.@.unusual.com@usual.com'))