// function bubble(arr) {
//   var len = arr.length; // Set len to the lengt of the array being input into the function

//   for (var i = 0; i < len; i++) {
//     // i = 0 , while i is less than the length of the array, increment
//     for (var j = 0; j < len - i - 1; j++) {
//       // j = 0 , while j is less than the length of i minus 1, increment
//       // this was missing
//       if (arr[j] > arr[j + 1]) {
//         // if the element at arr[j]  is greater than the element at arr[j + 1] THEN
//         // swap
//         var temp = arr[j]; // set the temporary value to the element at arr[j]
//         arr[j] = arr[j + 1]; // change the element at arr[j] to be the next element in the arr aka arr[j +1]
//         arr[j + 1] = temp; // change the element at arr[j + 1] to be whatever the temp was set to above
//         console.log(arr);
//       }
//     }
//   }
//   return arr;
// }

// bubble([1, 9, 2, 3, 7, 6, 4, 5, 5]);

const number = [1, 9, 2, 3, 7, 6, 4, 5, 5];
const sortedSubset = number.sort((a, b) => b - a);

console.log(sortedSubset);
