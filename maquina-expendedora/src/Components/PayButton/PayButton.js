import './PayButton.css';
import Swal from 'sweetalert2';

export const PayButton = ({ totalOrderCost, totalMoneyForPay, clientCanPay }) => {

  const handlePayButton = () => {
    if (totalOrderCost === 0) {
      Swal.fire({
        title: 'Oops!',
        text: 'Su orden está vacía',
        icon: 'warning',
        confirmButtonColor: '#27742D',
      });
    } else if (totalMoneyForPay < totalOrderCost) {
      Swal.fire({
        title: 'Oops!',
        text: 'El dinero ingresado es menor al costo de la orden',
        icon: 'warning',
        confirmButtonColor: '#27742D',
      });
    } else {
      clientCanPay(true);
    }
  }

  return (
    <button className='pay-button' onClick={handlePayButton} > Pagar </button>
  );
};