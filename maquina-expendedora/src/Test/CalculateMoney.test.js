import { calculateTotalOrderCost, calculateTotalMoneyForPay } from "../Utils/calculateTotalMoney";

test('Calcula el total de la orden, con un solo tipo de refresco', () => {
  let order = [{
    id: 1,
    type: 'Pepsi',
    price: 600,
    quantity: 2
  }];
  expect(calculateTotalOrderCost(order)).toBe(1200);
});

test('Calcula el total de la orden, varios tipos de refrescos', () => {
  let order = [{
    id: 1,
    type: 'Pepsi',
    price: 600,
    quantity: 2
  },
  {
    id: 0,
    type: 'Coca Cola',
    price: 500,
    quantity: 4
  }];
  expect(calculateTotalOrderCost(order)).toBe(3200);
});

test('Calcula el total de la orden, si la orden es undefined', () => {
  let order;
  expect(calculateTotalOrderCost(order)).toBe(0);
});

test('Calcula el total de la orden, si la orden existe pero está vacía', () => {
  let order = [];
  expect(calculateTotalOrderCost(order)).toBe(0);
});

test('Calcula el total de dinero ingresado por el usuario', () => {
  let moneyforPay = [
    {
      id: 0,
      type: 1000,
      quantity: 3
    },
    {
      id: 1,
      type: 500,
      quantity: 1
    },
    {
      id: 2,
      type: 100,
      quantity: 0
    },
    {
      id: 3,
      type: 50,
      quantity: 1
    },
    {
      id: 4,
      type: 25,
      quantity: 1
    }];
  expect(calculateTotalMoneyForPay(moneyforPay)).toBe(3575);
});

test('Calcula el total de dinero ingresado por el usuario, si el usuario no agregó ninguna moneda', () => {
  let moneyforPay = [
    {
      id: 0,
      type: 1000,
      quantity: 0
    },
    {
      id: 1,
      type: 500,
      quantity: 0
    },
    {
      id: 2,
      type: 100,
      quantity: 0
    },
    {
      id: 3,
      type: 50,
      quantity: 0
    },
    {
      id: 4,
      type: 25,
      quantity: 0
    }];
  expect(calculateTotalMoneyForPay(moneyforPay)).toBe(0);
});

test('Calcula el total de dinero ingresado por el usuario, si el arreglo de monedas es undefined', () => {
  let moneyforPay;
  expect(calculateTotalMoneyForPay(moneyforPay)).toBe(0);
});

test('Calcula el total de dinero ingresado por el usuario, si el arreglo de monedas está vacío', () => {
  let moneyforPay = [];
  expect(calculateTotalMoneyForPay(moneyforPay)).toBe(0);
});
