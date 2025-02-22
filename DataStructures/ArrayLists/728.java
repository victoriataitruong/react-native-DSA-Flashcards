import java.util.ArrayList;  // Import ArrayList to store results
import java.util.List;       // Import List interface

public class SelfDividingNumbers {
    public static List<Integer> selfDividingNumbers(int left, int right) {
        List<Integer> result = new ArrayList<>();  // Create a list to store self-dividing numbers

        // Iterate through all numbers in the range [left, right]
        for (int num = left; num <= right; num++) {
            // Check if the current number is self-dividing
            if (isSelfDividing(num)) {
                result.add(num);  // If true, add it to the result list
            }
        }

        return result;  // Return the list of self-dividing numbers
    }

    // Helper function to check if a number is self-dividing
    private static boolean isSelfDividing(int num) {
        int original = num;  // Store the original number to use for modulus operations

        // Iterate through each digit of the number
        while (num > 0) {
            int digit = num % 10;  // Extract the last digit of the number
            
            // If the digit is 0 (not allowed) or the original number is not divisible by the digit, return false
            if (digit == 0 || original % digit != 0) {
                return false;
            }

            num /= 10;  // Remove the last digit by integer division
        }

        return true;  // If all digits pass the check, return true
    }

    public static void main(String[] args) {
        int left = 1, right = 22;  // Define the range

        // Call the function and print the self-dividing numbers within the range
        System.out.println(selfDividingNumbers(left, right));  
        // Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
    }
}

//Time Complexity: O(N) (linear), since checking a number is constant time O(1).