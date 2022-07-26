import './OrderList.css'
import { MoneyFormatter } from '../../Utils/MoneyFormatter';
import Swal from 'sweetalert2';
import { Input } from '../Input/Input';
import { useEffect } from 'react';
import { calculateTotalOrderCost } from '../../Utils/calculateTotalMoney';

export const OrderList = ({ order, setOrder, machineStock, setTotalOrderCost }) => {


  useEffect(() => {
    setTotalOrderCost(calculateTotalOrderCost(order));
  }, [order]);

  const handleAddButton = (element) => {
    if (element.quantity === machineStock[element.id].quantity) {
      Swal.fire({
        title: 'Oops!',
        text: 'No existe más stock de este producto',
        icon: 'warning',
        confirmButtonColor: '#27742D',
      });
    } else {
      element.quantity++;
      let newOrder = order.slice(0);
      setOrder(newOrder);
    }
  }

  const handleSubstractButton = (element) => {
    if (element.quantity > 1) {
      element.quantity--;
      let newOrder = order.slice(0);
      setOrder(newOrder);
    } else {
      const newOrder = order.filter((item) => item.id !== element.id);
      setOrder(newOrder);
    }
  }

  return order.length <= 0 ? <div className='order-list'></div> : (
    <div className='order-list'>
      {order.map((element, index) => (
        <div className='order-item' key={element.id} >
          {index === 0 ? <></> : <hr className='line'></hr>}
          <div className='product-item'>
            <div className='product-info'>
              <h4 className='product-name'>{element.type}:</h4>
              <label> {MoneyFormatter.format(element.price)} </label>
            </div>
            <Input
              element={element}
              value={element.quantity}
              handleAdd={handleAddButton}
              handleSubstract={handleSubstractButton}
            ></Input>
          </div>
        </div>
      ))}
    </div>
  );
};