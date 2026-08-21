class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let arr = []
        for(let i=0;i<nums.length-1;i++){
            for(let j=0;j<nums.length;j++){
                if(nums[i]+nums[j]==target && i!=j){
                    arr[0]=i
                    arr[1]=j
                    return arr 
                }

            }
        }
        return -1
    }
}
