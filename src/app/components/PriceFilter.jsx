'use client';

export default function PriceFilter({ value, onChange }) {
  const [min, max] = value;

  return (
    <div className="flex gap-2 items-center">
      <input
        type="number"
        value={min}
        onChange={e => onChange([Number(e.target.value), max])}
        className="border p-1 rounded w-20"
        min={0}
      />
      <span>to</span>
      <input
        type="number"
        value={max}
        onChange={e => onChange([min, Number(e.target.value)])}
        className="border p-1 rounded w-20"
      />
    </div>
  );
}