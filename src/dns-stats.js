const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');

    let result = {};    
    function getDNS(str, obj){
        let arr = str.split('.').reverse().map(el=> '.'+el);
        for(let i =0; i < arr.length; i++){
            if(i!=0) {
                arr[i] = `${arr[i-1]}${arr[i]}`;
            };
            if (obj[arr[i]]) {
                obj[arr[i]] +=1;
            } else {
                obj[arr[i]] =1;
            }
        }
    }
    domains.forEach(el=>getDNS(el, result))
    return result;

}

module.exports = {
  getDNSStats
};
