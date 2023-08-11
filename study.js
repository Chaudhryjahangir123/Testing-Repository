const arr = [3, 5, 1, 8, 10, 2];

function getSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = null;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } 
    }

    return secondLargest;
}
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
    const secondLargest = getSecondLargest(arr);
    console.log("Second Largest:", secondLargest);
});
