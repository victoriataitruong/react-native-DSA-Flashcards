//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Create a HashMap to store the value and its index
        HashMap<Integer, Integer> map = new HashMap<>();
        
        // Iterate over the array once
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];  // Calculate the complement of the current number
            
            // Check if the complement is already in the map
            if (map.containsKey(complement)) {
                // If found, return the index of the complement and the current index
                return new int[] { map.get(complement), i };
            }
            
            // If not found, store the current number and its index in the map
            map.put(nums[i], i);
        }
        
        // If no solution found, return an empty array (this should never happen with valid input)
        return new int[0];
    }
}
