//Countdown Example
function countdown(n) {
    if (n <= 0) {  // Base case: stop when n is 0 or less
        console.log("Done!");
        return;
    }
    console.log(n);
    countdown(n - 1);  // Recursive call with a smaller value
}
countdown(5);



