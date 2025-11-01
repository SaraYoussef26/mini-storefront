# Mini-Storefront

Mini-Storefront is a simple app built with Next.js that allows users to browse products, filter by category and price, add items to a cart, and view dynamic stock updates. 
The project includes reusable React components (`Catalog`, `ProductList`, `ProductCard`, `CategoryFilter`, `PriceFilter`, `CartSummary`, `StatusMessage`) stored in `src/app/components/`, and product data is served via an API route (`src/app/api/products/route.js`). 
The app handles loading, error, and empty states, and uses React (`useState` and `useEffect`) for state management and simulated stock updates. 
To run the project, install dependencies with `npm install`, start the server with `npm run dev`, and visit `http://localhost:3000`.