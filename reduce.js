  
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// First we have created extended code (commented out) just
// to show how it actually works. Then how to use the simpler version.

// const nums = [1, 2, 3, 4];
// let sum = nums.reduce((acc, curr) => {
  // console.log(
    // "Accumulator:", acc,
    // "Current value:", curr,
    // "Total:", acc + curr
  // );
  // return acc + curr;
// }, 0);  // if we specify where it should start (at 0), it will execute 5 times
// however if we would to put in number 10, it would start at 10 and give us a total of 20 instead of 10 
// console.log(sum);

// Summing an array of numbers:
const nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr);
console.log(sum);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property


// Grouping by a property, and totaling it too
