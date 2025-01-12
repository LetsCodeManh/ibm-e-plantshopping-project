import { useDispatch, useSelector } from "react-redux";
import "./CartList.css";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../reducer/CartsSlice";

type CartItem = {
  name: string;
  image: string;
  cost: number;
  quantity: number;
};

const CartList: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    return cartItems.reduce((total: number, item: CartItem) => {
      return total + item.cost * item.quantity;
    }, 0);
  };

  const handleIncrement = (item: CartItem) => {
    dispatch(incrementQuantity(item));
  };

  const handleDecrement = (item: CartItem) => {
    dispatch(decrementQuantity(item));
  };

  const handleRemove = (item: CartItem) => {
    dispatch(removeItem(item));
  };

  const calculateTotalCost = (item: CartItem) => {
    return item.cost * item.quantity;
  };

  return (
    <div className="cart-container">
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div className="cart-list">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item: CartItem) => (
            <div className="cart-item" key={item.name}>
              <img
                className="cart-item-image"
                src={item.image}
                alt={item.name}
              />
              <div className="cart-item-details">
                <div className="cart-item-name">{item.name}</div>
                <div className="cart-item-cost">{item.cost}</div>
                <div className="cart-item-quantity">
                  <button
                    className="cart-item-button cart-item-button-dec"
                    onClick={() => handleDecrement(item)}
                  >
                    -
                  </button>
                  <p className="cart-item-quantity-value">{item.quantity}</p>
                  <button
                    className="cart-item-button cart-item-button-inc"
                    onClick={() => handleIncrement(item)}
                  >
                    +
                  </button>
                </div>
                <div className="cart-item-total">
                  Total: ${calculateTotalCost(item)}
                </div>
                <button
                  className="cart-item-delete"
                  onClick={() => handleRemove(item)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartList;
