import './PaymentDetails.css'
import { MoneyFormatter } from '../../Utils/MoneyFormatter';
import { Input } from '../Input/Input';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { calculateTotalChange } from '../../Utils/calculateChange';
import { calculateTotalMoneyForPay } from '../../Utils/calculateTotalMoney';

export const PaymentDetails = ({ totalOrderCost, totalChange, setTotalChange,
  totalMoneyForPay, setTotalMoneyForPay, clientMoney, setClientMoney }) => {
  const handleAddMoneyButton = (element) => {
    if (totalOrderCost > 0) {
      if (totalMoneyForPay < totalOrderCost) {
        element.quantity++;
        let newClientMoney = clientMoney.slice(0);
        setClientMoney(newClientMoney);
      } else {
        Swal.fire({
          title: 'Oops!',
          text: 'Ya ingresó suficiente dinero para pagar',
          icon: 'warning',
          confirmButtonColor: '#27742D',
        });
      }
    } else {
      Swal.fire({
        title: 'Oops!',
        text: 'Su orden está vacía, no puede ingresar dinero',
        icon: 'warning',
        confirmButtonColor: '#27742D',
      });
    }
  }

  const handleSubstractMoneyButton = (element) => {
    if (element.quantity > 0) {
      element.quantity--;
      let newClientMoney = clientMoney.slice(0);
      setClientMoney(newClientMoney);
    }
  }

  useEffect(() => {
    setTotalMoneyForPay(calculateTotalMoneyForPay(clientMoney));
  }, [clientMoney]);

  useEffect(() => {
    setTotalChange(calculateTotalChange(totalOrderCost, totalMoneyForPay));
  }, [totalOrderCost, totalMoneyForPay]);

  return (
    <div>
      <div>
        <h3 className='money-title'> Dinero aceptado </h3>
        {clientMoney.map((element, index) => (
          <div key={element.id}>
            {index === 0 ? <></> : <hr className='line'></hr>}
            <div className='money-div'>
              <h4 className='money-label'> ₡ {element.type}: </h4>
              <Input
                element={element}
                value={element.quantity}
                handleAdd={handleAddMoneyButton}
                handleSubstract={handleSubstractMoneyButton}
              ></Input>
            </div>
          </div>
        ))}
      </div>
      <div>
        <hr className='line'></hr>
        <div className='total-cost-div'>
          <div className='cost-items'>
            <h3> Ingresado: </h3>
            <label className='client-money-label'> {MoneyFormatter.format(totalMoneyForPay)} </label>
          </div>
          <div className='cost-items'>
            <h3> Vuelto: </h3>
            <label className='client-money-label'> {MoneyFormatter.format(totalChange)} </label>
          </div>
        </div>
      </div>
    </div>
  );
} 