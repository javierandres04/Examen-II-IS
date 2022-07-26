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
