var twoSum = function(nums, target) {
  var differences = {}
  var index1;
  var index2;
  for (var i = 0; i < nums.length; i++) {
      if (differences[target - nums[i]] !== undefined) {
          return [nums.indexOf(target - nums[i]), i]
      }
      differences[nums[i]] = target - nums[i];
  }
  return null;
};