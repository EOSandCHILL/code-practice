// Create a function that counts up from 5 to 10. First use a for loop in the function and then use recursion in the function. If the loop is not done, tell the program to keep counting down, but when the program ends make sure the program notifies us when 10 is reached.

const fiveToTenLoop = (num) => {
  for (let i = num; i <= 10; i++) {
    i < 10
      ? console.log(i + "... " + "keep counting...")
      : console.log("Finally! 10 was reached!");
  }
};
fiveToTenLoop(5);

console.log(" ");

const fiveToTenRec = (num) => {
  num < 10
    ? console.log(num + "... " + "keep counting...")
    : console.log("Finally! 10 was reached!");
  const updatedNum = num + 1;
  num < 10 ? fiveToTenRec(updatedNum) : null;
};

fiveToTenRec(5);
