import './VendingMachine.css';
import { MoneyFormatter } from '../../Utils/MoneyFormatter';
import { Products } from '../Products/Products';
import { useState } from 'react';
import { machineStock } from '../../data';
import { OrderList } from '../OrderList/OrderList';


export const VendingMachine = () => {
  const [stock, setStock] = useState(machineStock);
  const [order, setOrder] = useState([]);
  const [totalOrderCost, setTotalOrderCost] = useState(0);


  return (
    <>
      <div className='header'>
        <h2> Bebidas </h2>
      </div>
      <div className='main-container'>
        <div className='principal-menu'>
          <h2 className='title'> Productos disponibles </h2>
          <Products
            order={order}
            setOrder={setOrder}
            machineStock={stock}
          ></Products>
        </div>
        <div className='my-order'>
          <div>
            <h3 className='order-title'> Mi orden </h3>
            <OrderList
              order={order}
              setOrder={setOrder}
              setTotalOrderCost={setTotalOrderCost}
              machineStock={machineStock}
            ></OrderList>
            <hr className='line'></hr>
            <div className='order-total'>
              <h3> Total a pagar: </h3>
              <label> {MoneyFormatter.format(totalOrderCost)}</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};