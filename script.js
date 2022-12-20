// Passing functions inside of functions

// I created this to calculate the down payment amount that will be owed based on the cost of the home

const downPayment = (homeValue) => {
  const rate = 0.2;
  const amount = homeValue * rate;
  return amount;
};

const investments = (home1, home2, home3) => {
  const payment1 = downPayment(home1);
  const payment2 = downPayment(home2);
  const payment3 = downPayment(home3);
  const totalDue = payment1 + payment2 + payment3;
  return `The down payment for home 1 is ${payment1}. The down payment for home 2 is ${payment2}. The down payment for home 3 is ${payment3}. So, you owe a total of ${totalDue} in down payments.`;
};

const totalAmount = investments(100000, 120000, 300000);
console.log(totalAmount);

/*

the out put is:

The down payment for home 1 is 20000. The down payment for home 2 is 24000. The down payment for home 3 is 60000. So, you owe a total of 104000 in down payments.

*/
