import './Products.css'
import { MoneyFormatter } from '../../Utils/MoneyFormatter';

export const Products = ({ machineStock }) => {

  const handleProductClick = (element) => {
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