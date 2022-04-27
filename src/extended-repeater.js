const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, obj) {
//   function getCopyString(str, sep, qty) {
//     let result = [];
//     for(let i=0; i<qty; i++) {
//         result.push(str)
//     }
//     return result.join(sep);
// }
// return getCopyString((str + getCopyString(obj.addition, obj.additionSeparator, obj.additionRepeatTimes)), obj.separator, obj.repeatTimes);
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
