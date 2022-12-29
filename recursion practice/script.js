// Create a function that counts down from 10 to 0. First use a for loop and then use recursion. If the loop has is not done, tell the program to keep counting down, but when the program ends make sure the program notifies us that the count down is complete.

const countDownLoop = (num) => {
  for (let i = num; i >= 0; i--) {
    console.log(i + " " + "until 0");
    i == 0
      ? console.log("count down complete")
      : console.log("keep counting down");
  }
};
countDownLoop(10);

console.log(" ");

const countDownRecursion = (num) => {
  console.log(num + " " + "until 0");
  num > 0
    ? console.log("keep counting down")
    : console.log("count down complete");
  const updatedNum = num - 1;
  num > 0 ? countDownRecursion(updatedNum) : null;
};

countDownRecursion(10);
