import { calculateTotalChange } from "../Utils/calculateChange";

test('Calcula el cambio total que debe darse al usuario', () => {
  let totalOrderCost = 1100;
  let totalMoneyForPay = 1500;
  expect(calculateTotalChange(totalOrderCost, totalMoneyForPay)).toBe(400);
});

test('Calcula el cambio total que debe darse al usuario cuando los montos son iguales', () => {
  let totalOrderCost = 1500;
  let totalMoneyForPay = 1500;
  expect(calculateTotalChange(totalOrderCost, totalMoneyForPay)).toBe(0);
});

test('Calcula el cambio total que debe darse al usuario si los montos son undefined', () => {
  let totalOrderCost;
  let totalMoneyForPay;
  expect(calculateTotalChange(totalOrderCost, totalMoneyForPay)).toBe(0);
});

test(`Calcula el cambio total que debe darse al usuario si el monto a pagar es 
      mayor que el monto dado por el ususario`, () => {
  let totalOrderCost = 1000;
  let totalMoneyForPay = 500;
  expect(calculateTotalChange(totalOrderCost, totalMoneyForPay)).toBe(0);
});

