import './Input.css'

export const Input = ({ element, value, handleAdd, handleSubstract }) => {

  return (
    <div className='Input-quantity'>
      <button className='quantity-button substract-button' onClick={() => handleSubstract(element)}> {'-'} </button>
      <input
        disabled
        value={value}
        className='input-number'>
      </input>
      <button className='quantity-button' onClick={() => handleAdd(element)}> {'+'} </button>
    </div>
  );
}