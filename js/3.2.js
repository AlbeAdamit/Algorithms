var my_array = [1, 2, 3, 4, 5];
var last_element = my_array[my_array.length - 1];
let i = 0;
let average = 0;

while (i++ != last_element) {
    average = average + my_array[i++];
}
console.log(i/average);
