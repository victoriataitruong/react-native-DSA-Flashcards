import java.util.ArrayList;
 
public class ArrayListExample {
    public static void main(String[] args) {
        // ArrayList with dynamic resizing
        ArrayList<String> fruits = new ArrayList<>();
        
        // Add elements
        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Orange");

        // Access an element by index
        System.out.println(fruits.get(1));  // Output: Banana

        // Remove an element
        fruits.remove(0);  // Removes "Apple"
        System.out.println(fruits);  // Output: [Banana, Orange]
    }
}