export const calculateTotalStock = (machineStock) => {
  let totalStock = 0;
  if (machineStock !== undefined) {
    machineStock.forEach(element => {
      totalStock += element.quantity
    });
  }
  return totalStock;
};