import { calculateTotalChange, calculateItemizedChange } from "../Utils/calculateChange";
import { itemizedChangeToString } from '../Utils/itemizedChangeToString';

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

test(`Calcula el desglose del vuelto con la cantidad de monedas iniciales`, () => {
  let totalChange = 1150;
  let coinsStock = [
    {
      id: 1,
      type: '500',
      quantity: 20
    },
    {
      id: 2,
      type: '100',
      quantity: 30
    },
    {
      id: 3,
      type: '50',
      quantity: 50
    },
    {
      id: 4,
      type: '25',
      quantity: 25
    },
  ];
  expect(calculateItemizedChange(totalChange, coinsStock)).toStrictEqual([
    {
      type: '500',
      quantity: 2
    },
    {
      type: '100',
      quantity: 1
    },
    {
      type: '50',
      quantity: 1
    }
  ]);
});

test(`Calcula el desglose del vuelto si la máquina no tiene monedas para dar vuelto`, () => {
  let totalChange = 1150;
  let coinsStock = [
    {
      id: 1,
      type: '500',
      quantity: 0
    },
    {
      id: 2,
      type: '100',
      quantity: 0
    },
    {
      id: 3,
      type: '50',
      quantity: 0
    },
    {
      id: 4,
      type: '25',
      quantity: 0
    },
  ];
  expect(calculateItemizedChange(totalChange, coinsStock)).toStrictEqual([]);
});

test(`Calcula el desglose del vuelto si el vuelto es 0`, () => {
  let totalChange = 0;
  let coinsStock = [
    {
      id: 1,
      type: '500',
      quantity: 20
    },
    {
      id: 2,
      type: '100',
      quantity: 30
    },
    {
      id: 3,
      type: '50',
      quantity: 50
    },
    {
      id: 4,
      type: '25',
      quantity: 25
    },
  ];
  expect(calculateItemizedChange(totalChange, coinsStock)).toStrictEqual([]);
});

test(`Calcula el desglose del vuelto si no tiene algún tipo de moneda`, () => {
  let totalChange = 1050;
  let coinsStock = [
    {
      id: 1,
      type: '500',
      quantity: 0
    },
    {
      id: 2,
      type: '100',
      quantity: 30
    },
    {
      id: 3,
      type: '50',
      quantity: 50
    },
    {
      id: 4,
      type: '25',
      quantity: 25
    },
  ];
  expect(calculateItemizedChange(totalChange, coinsStock)).toStrictEqual([
    {
      type: '100',
      quantity: 10
    },
    {
      type: '50',
      quantity: 1
    }
  ]);
});


test(`Devuelve el desglose del cambio como string`, () => {
  let itemizedChange = [
    {
      type: '100',
      quantity: 10
    },
    {
      type: '50',
      quantity: 1
    }
  ];
  expect(itemizedChangeToString(itemizedChange)).toBe(`10 monedas de 100\n1 monedas de 50\n`);
});

test(`Devuelve el desglose del cambio como string, si no tiene cambio`, () => {
  let itemizedChange = [];
  expect(itemizedChangeToString(itemizedChange)).toBe(``);
});

test(`Devuelve el desglose del cambio como string, si el cambio viene undefined`, () => {
  let itemizedChange;
  expect(itemizedChangeToString(itemizedChange)).toBe(``);
});

