import './PaymentDetails.css'
import { MoneyFormatter } from '../../Utils/MoneyFormatter';
import { Input } from '../Input/Input';

export const PaymentDetails = ({ totalOrderCost, totalChange, totalMoneyForPay, clientMoney, setClientMoney }) => {
  const handleAddMoneyButton = (element) => {
  }

  const handleSubstractMoneyButton = (element) => {
  }

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