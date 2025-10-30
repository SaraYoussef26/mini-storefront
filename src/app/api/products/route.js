export async function GET() {
  const products = [
    { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics', stock: 5 },
    { id: 'p2', name: 'Desk Chair', price: 150, category: 'Furniture', stock: 3 },
    { id: 'p3', name: 'Headphone', price: 95, category: 'Electronics', stock: 4 },
    { id: 'p4', name: 'Phone', price: 900, category: 'Electronics', stock: 6 },
    { id: 'p5', name: 'Notebook', price: 15, category: 'Stationery', stock: 8 },
    { id: 'p6', name: 'Monitor', price: 250, category: 'Electronics', stock: 2 },
    { id: 'p7', name: 'Coffee Table', price: 100, category: 'Furniture', stock: 9 },
    { id: 'p8', name: 'Pencil set', price: 5, category: 'Stationery', stock: 12 },

  ];
  return new Response(JSON.stringify(products), {
    headers: { 'Content-Type': 'application/json'},

  });
}