'use client';

import { useState, useEffect } from 'react';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import PriceFilter from './PriceFilter';
import CartSummary from './CartSummary';
import StatusMessage from './StatusMessage';

export default function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [categoryFilter, setCategoryFilter] = useState('All');
  const [priceFilter, setPriceFilter] = useState([0, 2000]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProducts(prev =>
        prev.map(product => {
          const change = Math.random() < 0.5 ? -1 : 1;
          const newStock = Math.max(0, product.stock + change);
          return { ...product, stock: newStock };
        })
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const filteredProducts = products.filter(product => {
    const inCategory = categoryFilter === 'All' || product.category === categoryFilter;
    const inPrice = product.price >= priceFilter[0] && product.price <= priceFilter[1];
    return inCategory && inPrice;
  });

  const addToCart = product => {
    setCart(prev => [...prev, product]);
  };

  if (loading) return <StatusMessage message="Loading products..." />;
  if (error) return <StatusMessage message="Error loading products." />;
  if (products.length === 0) return <StatusMessage message="No products found." />;

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex gap-4">
        <CategoryFilter value={categoryFilter} onChange={setCategoryFilter} />
        <PriceFilter value={priceFilter} onChange={setPriceFilter} />
      </div>

      {/* Product list */}
      <ProductList products={filteredProducts} addToCart={addToCart} />

      {/* Cart summary */}
      <CartSummary cart={cart} setCart={setCart} />
    </div>
  );
}