let today = new Date();

export const daily = (expenses) => {
  if (expenses.length > 0) {
    const amounts = expenses
      .filter(
        (expense) => new Date(expense.created).getDate() === today.getDate()
      )
      .map((expense) => expense.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0);
    return total;
  } else return 0;
};

export const monthly = (expenses) => {
  if (expenses.length > 0) {
    const amounts = expenses
      .filter(
        (expense) => new Date(expense.created).getMonth() === today.getMonth()
      )
      .map((expense) => expense.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0);
    return total;
  } else return 0;
};
export const yearly = (expenses) => {
  if (expenses.length > 0) {
    const amounts = expenses
      .filter(
        (expense) =>
          new Date(expense.created).getFullYear() === today.getFullYear()
      )
      .map((expense) => expense.amount);

    const total = amounts.reduce((acc, item) => (acc += item), 0);
    return total;
  } else return 0;
};
// export const thisYear = (expenses) => {
//   const amounts = expenses
//     .filter(
//       (expense) =>
//         new Date(expense.created).getFullYear() === today.getFullYear()
//     )
//     .map((expense) => expense.amount);

//   const total = amounts.reduce((acc, item) => (acc += item), 0);
//   return total;
// };

// export const thisYear = (expenses, year) => {
//   console.log(expenses);

//   const months = expenses.filter(
//     (expense) => new Date(expense.created).getFullYear() === `20${year}`
//   );
//   return months;
// };

// export const jan = (expenses, year) => {
//   console.log(expenses);
//   const months = thisYear(expenses, year)
//     .filter((month) => new Date(month.created).getMonth() === 0)
//     .map((expense) => expense.amount);
//   const totJan = months.reduce((acc, item) => (acc += item), 0);
//   return totJan;
// };
// console.log(jan());

// export const feb = (expenses, year) => {
//   const months = thisYear(expenses, year)
//     .filter((month) => new Date(month.created).getMonth() === 0)
//     .map((expense) => expense.amount);
//   const totFeb = months.reduce((acc, item) => (acc += item), 0);
//   return totFeb;
// };
