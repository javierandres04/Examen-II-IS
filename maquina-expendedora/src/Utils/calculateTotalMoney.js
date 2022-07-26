export const calculateTotalOrderCost = (order) => {
  let totalCost = 0
  if (order !== undefined) {
    if (order.length > 0) {
      order.forEach(element => {
        totalCost += element.price * element.quantity;
      });
    }
  }
  return totalCost;
};

export const calculateTotalMoneyForPay = (moneyforPay) => {
  let total = 0;
  if (moneyforPay !== undefined) {
    if (moneyforPay.length > 0) {
      moneyforPay.forEach(element => {
        total += element.type * element.quantity;
      });
    }
  }
  return total;
};