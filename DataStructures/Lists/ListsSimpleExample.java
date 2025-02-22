import java.util.List;
import java.util.ArrayList;
import java.util.LinkedList;

public class ListInterfaceExample {
    public static void main(String[] args) {
        // Declaring the list as the List interface, but choosing the implementation
        List<String> myList;

        // Using ArrayList (Array-backed list)
        myList = new ArrayList<>();
        myList.add("Dog");
        myList.add("Cat");
        System.out.println(myList);  // Output: [Dog, Cat]

        // Switch to LinkedList (Linked list implementation)
        myList = new LinkedList<>();
        myList.add("Elephant");
        myList.add("Lion");
        System.out.println(myList);  // Output: [Elephant, Lion]
    }
}