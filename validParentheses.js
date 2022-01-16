/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if (s.length === 1) {return false}
  var obj = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  }
  var array = s.split('')
  var opened = [];
  var closed = [];
  for (var i = 0; i < array.length; i ++) {
    if(array[i] === '(' || array[i] === '[' || array[i] === '{' ){
      opened.push(array[i]);
    }
    if(array[i] === ')' || array[i] === ']' || array[i] === '}') {
      closed.push(array[i])
      let lastOpened = opened.pop();
      if (array[i] !== obj[lastOpened]) {
        return false;
      }
    }
  }
  if (opened.length !== 0) {return false}
  return true;
};