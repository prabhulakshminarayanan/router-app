import React from 'react';
import CartItem from '../components/CartItem';

const CartPage = ({ cart, setCart }) => {
  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, increment) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + increment }
          : item
      ).filter((item) => item.quantity > 0)
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedTotal = total * 0.9;

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Cart</h2>
      {cart.length > 0 ? (
        <>
          <div>
            {cart.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={handleRemoveFromCart}
                onQuantityChange={handleQuantityChange}
              />
            ))}
          </div>
          <div className="mt-4">
            <p>Total: ${total.toFixed(2)}</p>
            <p>Discounted Total: ${discountedTotal.toFixed(2)}</p>
          </div>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
