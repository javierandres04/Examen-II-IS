export const calculateTotalChange = (totalOrderCost, totalMoneyForPay) => {
  let totalChange = 0;
  if (totalOrderCost !== undefined && totalMoneyForPay !== undefined) {
    if (totalOrderCost < totalMoneyForPay && totalOrderCost !== 0)
      totalChange = totalMoneyForPay - totalOrderCost;
  }
  return totalChange;
};

export const calculateItemizedChange = (totalChange, coinsStock) => {
  let itemizedChange = [];
  let change = totalChange;
  if (totalChange !== undefined && coinsStock !== undefined) {
    for (let i = 0; change > 0 && i < coinsStock.length; i++) {
      let coin = coinsStock[i];

      if (coin.type <= change) {
        const coinsNeeded = Math.floor(change / coin.type);
        if (coin.quantity >= coinsNeeded) {
          const coinType = coin.type;
          itemizedChange.push(
            {
              type: coinType,
              quantity: coinsNeeded
            }
          )
          change -= coinType * coinsNeeded;
        }
      }
    }
  }
  return itemizedChange;
};
