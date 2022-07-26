import './Products.css'
import { MoneyFormatter } from '../../Utils/MoneyFormatter';
import Swal from 'sweetalert2';

export const Products = ({ order, setOrder, machineStock }) => {

  const handleProductClick = (product) => {
    const found = order.find(element => product.id === element.id);

    if (found === undefined) {
      const orderProduct = {
        id: product.id,
        type: product.type,
        price: product.price,
        quantity: 1
      }
      setOrder([...order, orderProduct]);
    } else {
      if (found.quantity === product.quantity) {
        Swal.fire({
          title: 'Oops!',
          text: 'No existe más stock de este producto',
          icon: 'warning',
          confirmButtonColor: '#27742D',
        });
      } else {
        found.quantity++;
        const newOrder = order.slice(0);
        setOrder(newOrder);
      }
    }
  }

  return (
    <div className='product-grid'>
      {machineStock.map((element) => (
        element.quantity > 0 ?
          <div key={element.id} onClick={() => handleProductClick(element)} className='product-container'>
            <img className='product-image' src={`img/${element.image}`} alt={element.type} ></img>
            <h4> {element.type} </h4>
            <label>{MoneyFormatter.format(element.price)} </label>
            <label> En stock: {element.quantity}</label>
          </div>
          :
          <div key={element.id} className='product-container out-of-stock'>
            <img className='product-image out-of-stock' src={`img/${element.image}`} alt={element.type} ></img>
            <h4> {element.type} </h4>
            <label>{MoneyFormatter.format(element.price)} </label>
            <label> Fuera de stock </label>
          </div>
      ))}
    </div>
  );
};