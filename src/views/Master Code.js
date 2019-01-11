 // BIG O Notation

// const nemo = ['nemo'];

// function findNemo(array) {
//   // let t0 = performance.now();
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] === 'nemo') {
//       console.log('found Nemo!'); 
//     }
//   }
//  // let t1 = performance.now();
//  //  console.log('call to find Nemo took' + (t1 - t0) + 'miliseconds');
//  }
// findNemo(nemo);

// // O(n) --> Liner Time

//given two arrays, create fuction that let's a user know whether these two arrays contain any common items

// const array1 = ["a","b","c","x"];
// const array2 = ["z","y","x"];

// function commonItem(array1,array2) {
//   for (let i = 0; i < array1.length; i++) {
//     for ( let j = 0; j < array2.length; j++) {
//       if (array1[i] === array2[j]) {
//         return true;
//       } 
//     }
//   }
//   return false;
// }

// console.log(commonItem(array2,array1)); 

// BigO = O(a * b)  time complexitydifferent size arrays not effieceint because of time complexity lots of looping 
// O(a) Space complexity


// const array1 = ["a","b","c","x"];
// const array2 = ["z","y","a"];

// // array1 ==> obj {
// //   a: true,
// //   b: true,
// //   c: true,
// //   x: true,
// // }

// // array2[index] === obj.properties

// function commonItem2(array1,array2) {
//   // loop through first array and create object where properties === items in the array // loop through second array and check if item in second array exists on created object.
//   let map = {};
//   for (let i = 0; i < array1.length; i++) {
//     if (!map[array1[i]]) {
//       const item = array1[i];
//       map[item] = true;
//     }
//   }
//   for (let j = 0; j < array2.length; j++) {
//     if (map[array2[j]]) {
//       return true;
//     }
//   }
//   return false;
// }

// commonItem2(array1.array2);



//BigO = O(a + b) time complexity is better
// O(1) Space complexity


array1 = [1,2,3,9]; 
array2 =  [1,2,4,4];

function hasPairs (array1,array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let x = 0; x < array2.length; x++) {
      sum = array1[i] + array2[x];
      if (array1[i] === array2[x] === sum) {
        return true;
      }
    }
  }
  return false;
}

console.log(hasPairs([1,2,3,9]));