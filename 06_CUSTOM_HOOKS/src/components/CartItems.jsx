import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

function CartItems({ item, onUpdateQuantity, onRemove }) {
  return (
    <div className="cart-item">
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>{item.name}</p>
        <div className="quantity-control">
          <button onClick={() => onUpdateQuantity(item.id, item.quntity - 1)}>
            <FaMinus />
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => onUpdateQuantity(item.id, item.quntity + 1)}>
            <FaPlus />
          </button>
        </div>
      </div>
      <button className="remove-btn" onClick={() => onRemove(item.id)}>
        <FaTrash />
      </button>
    </div>
  );
}

export default CartItems;
