/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
*/
var subarraySum = function(nums, k) {
  var count = 0;
  for (var i = 0; i < nums.length; i++) {
    var total += nums[i]
    if (total === k) {
      count += 1;
      continue;
    }
    for (var j = i + 1; j < nums.length; j++) {
      total += nums[j]
      if(total === k) {
        count += 1;
        break;
      }
    }
  }
  return count;
};