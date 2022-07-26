export const calculateTotalChange = (totalOrderCost, totalMoneyForPay) => {
  let totalChange = 0;
  if (totalOrderCost !== undefined && totalMoneyForPay !== undefined) {
    if (totalOrderCost < totalMoneyForPay && totalOrderCost !== 0)
      totalChange = totalMoneyForPay - totalOrderCost;
  }
  return totalChange;
};

