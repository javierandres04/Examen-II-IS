import './VendingMachine.css';
import { MoneyFormatter } from '../../Utils/MoneyFormatter';
import { Products } from '../Products/Products';
import { useState, useEffect } from 'react';
import { machineStock } from '../../data';
import { OrderList } from '../OrderList/OrderList';
import { initialClientMoney } from '../../data';
import { PaymentDetails } from '../PaymentDetails/PaymentDetails';
import { machineChange } from '../../data';
import { calculateTotalStock } from '../../Utils/calculateTotalStocks';
import Swal from 'sweetalert2';


export const VendingMachine = () => {
  const [stock, setStock] = useState(machineStock);
  const [order, setOrder] = useState([]);
  const [totalOrderCost, setTotalOrderCost] = useState(0);
  const [totalChange, setTotalChange] = useState(0);
  const [totalMoneyForPay, setTotalMoneyForPay] = useState(0);
  const [clientMoney, setClientMoney] = useState(initialClientMoney.slice(0));
  const [coinsStock, setCoinsStock] = useState(machineChange);

  useEffect(() => {
    const totalCoinsStock = calculateTotalStock(coinsStock);
    if (totalCoinsStock === 0) {
      Swal.fire({
        title: 'Error!',
        text: 'Máquina fuera de servicio por falta de monedas para vuelto',
        icon: 'error',
        showConfirmButton: false,
        allowEnterKey: false,
        allowOutsideClick: false,
        allowEscapeKey: false
      });
    }
  }, [coinsStock]);


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
          <div>
            <PaymentDetails
              totalOrderCost={totalOrderCost}
              totalChange={totalChange}
              setTotalChange={setTotalChange}
              totalMoneyForPay={totalMoneyForPay}
              setTotalMoneyForPay={setTotalMoneyForPay}
              clientMoney={clientMoney}
              setClientMoney={setClientMoney}
            >
            </PaymentDetails>
          </div>
        </div>
      </div>
    </>
  );
};