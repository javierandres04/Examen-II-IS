import { calculateTotalOrderCost } from "../Utils/calculateTotalMoney";

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
