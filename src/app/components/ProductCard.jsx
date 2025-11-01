'use client';

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Stock: {product.stock}</p>
      <button
        onClick={() => addToCart(product)}
        disabled={product.stock === 0}
        className={`mt-2 px-3 py-1 rounded ${
          product.stock === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white'
        }`}
      >
        {product.stock === 0 ? 'Out of stock' : 'Add to Cart'}
      </button>
    </div>
  );
}
