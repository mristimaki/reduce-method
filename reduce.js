  
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

// Totaling a specific object property (don't forget to specify the initial value!)
let totalExperience = teamMembers.reduce((acc, curr) => acc + curr.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
// { Developer: 12, Designer: 4 } <-- the result we want!
// The second set of curly braces is our initial value, an empty object.
let experienceByProfession = teamMembers.reduce((acc, curr) => {
  let key = curr.profession;
  if (!acc[key]){
    acc[key] = curr.yrsExperience;
  } else {
    acc[key] += curr.yrsExperience;
  }
  return acc;
}, {});

console.log(experienceByProfession);