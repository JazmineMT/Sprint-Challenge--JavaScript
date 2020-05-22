// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

// The nested function has the abillity to acces the variable internal because nested function is still in the same scope.Function scope allows us to use any variables anywhere within our function.


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function sumation (number){
    let sumCount = 0;
    for (let i = 0; i <= number; i++){
        sumCount += i;
    }
  return sumCount;
};

console.log(sumation(4));