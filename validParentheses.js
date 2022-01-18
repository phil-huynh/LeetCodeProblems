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
  var allOpened = [];
  var closed = [];
  for (var i = 0; i < array.length; i ++) {
    if(array[i] === '(' || array[i] === '[' || array[i] === '{' ){
      opened.push(array[i]);
      allOpened.push(i)
    }
    if(array[i] === ')' || array[i] === ']' || array[i] === '}') {
      closed.push(array[i])
      let lastOpened = opened.pop();
      if (array[i] !== obj[lastOpened]) {
        return false;
      }
    }
  }
  if (allOpened.length !== closed.length) {return false}
  return true;
};