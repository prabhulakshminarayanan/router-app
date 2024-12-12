import React from 'react';

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div>
        <h4 className="font-bold">{item.title}</h4>
        <p>${item.price.toFixed(2)} x {item.quantity}</p>
        <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div>
        <button
          onClick={() => onQuantityChange(item.id, -1)}
          className="px-2 py-1 bg-gray-200 rounded mr-2"
        >
          -
        </button>
        <button
          onClick={() => onQuantityChange(item.id, 1)}
          className="px-2 py-1 bg-gray-200 rounded"
        >
          +
        </button>
        <button
          onClick={() => onRemove(item.id)}
          className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
