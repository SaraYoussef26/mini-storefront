'use client';

export default function CartSummary({ cart, setCart }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const decrement = () => setCart(prev => prev.slice(0, -1));
  const reset = () => setCart([]);

  return (
    <div className="border p-4 rounded shadow mt-4">
      <p>Items in Cart: {cart.length}</p>
      <p>Total: ${total}</p>
      <button onClick={decrement} className="mr-2 bg-yellow-500 px-2 py-1 rounded">
        Remove Last
      </button>
      <button onClick={reset} className="bg-red-500 text-white px-2 py-1 rounded">
        Reset Cart
      </button>
    </div>
  );
}