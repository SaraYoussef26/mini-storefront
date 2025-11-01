'use client';



export default function StatusMessage({ message }) {
  return (
    <div className="p-4 bg-gray-200 rounded text-center">
      {message}
    </div>
  );
}