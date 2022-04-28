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
  function getCopyString(str, sep, qty) {
    str = isFinite(str) ? String(str) : str;
    let result = [];
    for(let i = 0; i < qty; i++) {
        result.push(str);
    }
    return result.join(sep);
  }
  let additionStr = getCopyString(obj.addition, obj.additionSeparator || '|', obj.additionRepeatTimes || 1);
  let resultStr = getCopyString((str + additionStr), obj.separator || '+', obj.repeatTimes || 1);

  return resultStr;
  // throw new NotImplementedError('Not implemented');
}

module.exports = {
  repeater
};
