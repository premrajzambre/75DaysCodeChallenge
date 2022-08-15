/**
 * @param {number[]} nums
 * @return {number}
 */
//JavaScript Solution
var findDuplicate = function(nums) {
    let sortedNums = nums;
    sortedNums.sort();
    var n = sortedNums[0];
    for (let i=1;i<sortedNums.length; i++) {
        if(n==sortedNums[i]){
            return sortedNums[i];
        }
        else{
            n = sortedNums[i]
            continue

        }
        
    }
}
