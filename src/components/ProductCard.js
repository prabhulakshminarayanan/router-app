import React from 'react';

const ProductCard = ({ product, isInCart, onAddToCart }) => {
  return (
    <div className="border p-4 rounded shadow">
      <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2" />
      <h3 className="font-bold text-lg">{product.title}</h3>
      <p>${product.price}</p>
      <p className="text-sm mb-2">{product.description}</p>
      <button
        onClick={() => onAddToCart(product)}
        className={`px-4 py-2 ${isInCart ? 'bg-red-500' : 'bg-green-500'} text-white rounded`}
      >
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
