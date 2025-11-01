'use client';

export default function CategoryFilter({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      className="border p-2 rounded"
    >
      <option value="All">All</option>
      <option value="Electronics">Electronics</option>
      <option value="Furniture">Furniture</option>
    </select>
  );
}