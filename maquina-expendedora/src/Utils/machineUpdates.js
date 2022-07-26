export const savePayedMoney = (clientMoney, coinsStock, setCoinsStock) => {
  if (clientMoney !== undefined && coinsStock !== undefined && setCoinsStock !== undefined) {
    let newCoinsStock = coinsStock.slice(0);
    let clientCoins = clientMoney.slice(1);
    for (let i = 0; i < newCoinsStock.length; i++) {
      newCoinsStock[i].quantity += clientCoins[i].quantity;
    }
    setCoinsStock(newCoinsStock);
  }
}

export const returnPayedMoney = (clientMoney, coinsStock, setCoinsStock) => {
  if (clientMoney !== undefined && coinsStock !== undefined && setCoinsStock !== undefined) {
    let newCoinsStock = coinsStock.slice(0);
    let clientCoins = clientMoney.slice(1);
    for (let i = 0; i < newCoinsStock.length; i++) {
      newCoinsStock[i].quantity -= clientCoins[i].quantity;
    }
    setCoinsStock(newCoinsStock);
  }
}

export const updateMachineStock = (order, stock, setStock) => {
  if (order !== undefined && stock !== undefined && setStock !== undefined) {
    let newStock = stock.slice(0);
    newStock.forEach(stockItem => {
      const foundInOrder = order.find(orderItem => stockItem.id === orderItem.id);
      if (foundInOrder !== undefined) {
        stockItem.quantity -= foundInOrder.quantity;
      }
    });
    setStock(newStock);
  }
}

export const updateClientMoney = (clientMoney, setClientMoney) => {
  if (clientMoney !== undefined && setClientMoney !== undefined) {
    let newClientMoney = clientMoney.slice(0);
    newClientMoney.forEach(element => {
      element.quantity = 0;
    });
    setClientMoney(newClientMoney);
  }
}

export const updateCoinsStock = (itemizedChange, coinsStock, setCoinsStock) => {
  if (itemizedChange !== undefined && coinsStock !== undefined && setCoinsStock !== undefined) {
    let newStock = coinsStock.slice(0);
    newStock.forEach(stockItem => {
      const foundInChange = itemizedChange.find(changeItem => stockItem.type === changeItem.type);
      if (foundInChange !== undefined) {
        stockItem.quantity -= foundInChange.quantity;
      }
    });
    setCoinsStock(newStock);
  }
}