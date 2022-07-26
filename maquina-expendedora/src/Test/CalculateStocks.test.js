import { calculateTotalStock } from "../Utils/calculateTotalStocks";

test('Calcula el total de monedas disponibles para vuelto', () => {
  let machineChange = [
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
  expect(calculateTotalStock(machineChange)).toBe(125);
});

test('Calcula el total de monedas disponibles para vuelto, si no hay monedas', () => {
  let machineChange = [
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
  expect(calculateTotalStock(machineChange)).toBe(0);
});

test('Calcula el total de monedas disponibles para vuelto, si el arreglo de monedas está vacío', () => {
  let machineChange = [];
  expect(calculateTotalStock(machineChange)).toBe(0);
});

test('Calcula el total de monedas disponibles para vuelto, si el arreglo de monedas es undefined', () => {
  let machineChange;
  expect(calculateTotalStock(machineChange)).toBe(0);
});

test('Calcula el total de refrescos disponibles en la máquina', () => {
  let machineBeverages = [
    {
      id: 0,
      type: 'Coca Cola',
      price: 500,
      quantity: 10,
      image: 'CocaCola.jpg'
    },
    {
      id: 1,
      type: 'Pepsi',
      price: 600,
      quantity: 8,
      image: 'Pepsi.jpg'
    },
    {
      id: 2,
      type: 'Fanta',
      price: 550,
      quantity: 10,
      image: 'Fanta.jpg'
    },
    {
      id: 3,
      type: 'Sprite',
      price: 725,
      quantity: 15,
      image: 'Sprite.jpg'
    }
  ];
  expect(calculateTotalStock(machineBeverages)).toBe(43);
});

test('Calcula el total de refrescos disponibles, si no hay en stock', () => {
  let machineBeverages = [
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
  expect(calculateTotalStock(machineBeverages)).toBe(0);
});

test('Calcula el total de refrescos disponibles, si el arreglo de bebidas está vacío', () => {
  let machineBeverages = [];
  expect(calculateTotalStock(machineBeverages)).toBe(0);
});

test('Calcula el total de refrescos disponibles, si el arreglo de bebidas es undefined', () => {
  let machineBeverages;
  expect(calculateTotalStock(machineBeverages)).toBe(0);
});