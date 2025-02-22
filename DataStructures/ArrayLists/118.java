import java.util.ArrayList; // Import ArrayList to store the triangle
import java.util.List;      // Import List interface for flexibility

public class PascalsTriangle { // Define a class named PascalsTriangle
    public static List<List<Integer>> generate(int numRows) { // Method to generate Pascal's Triangle up to numRows
        List<List<Integer>> triangle = new ArrayList<>(); // Create a list to store the rows of the triangle

        for (int i = 0; i < numRows; i++) { // Loop through each row
            List<Integer> row = new ArrayList<>(); // Create a new row for the current level
            for (int j = 0; j <= i; j++) { // Loop through elements in the row
                if (j == 0 || j == i) { // First and last elements of each row are always 1
                    row.add(1); 
                } else { 
                    // Compute the value as the sum of the two values above it
                    row.add(triangle.get(i - 1).get(j - 1) + triangle.get(i - 1).get(j));
                    /*
                        triangle.get(i - 1).get(j - 1) retrieves the element from the previous row (i - 1) and the previous column (j - 1).
                        triangle.get(i - 1).get(j) retrieves the element from the previous row (i - 1) and the current column (j).
                    */
                }
            }
            triangle.add(row); // Add the completed row to the triangle
        }
        
        return triangle; // Return the full Pascal's Triangle
    }

    public static void main(String[] args) { // Main method to test the function
        int numRows = 5; // Example input: generate 5 rows of Pascal's Triangle
        List<List<Integer>> result = generate(numRows); // Call the generate method
        
        for (List<Integer> row : result) { // Loop through each row in the result
            System.out.println(row); // Print the row
        }
    }
}