var removeDuplicates = function(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i + 1] === nums[i]) {
      nums.splice(i + 1, 1)
    }
  }
  return nums.length;
};