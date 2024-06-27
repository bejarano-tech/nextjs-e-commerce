# Nextjs eCommerce

Nextjs eCommerce is a responsive e-commerce application built with Next.js and styled-components. The application features product search, a shopping cart, and dynamic loading of products.

## Features

- **Product Search**: Filter products by name using the search bar in the header.
- **Dynamic Product Loading**: Initially loads a set number of products and allows loading more with a "View More" button.
- **Shopping Cart**: Add products to the cart, update quantities, and remove items.
- **Responsive Design**: Optimized for both desktop and mobile devices using styled-components.

## Technologies Used

- **Next.js**: A React framework for server-side rendering and generating static websites.
- **styled-components**: A library for styling React components using tagged template literals.
- **React Icons**: A collection of popular icons for React applications.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.

## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

- Node.js (version 14.x or later)
- npm or yarn

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/bejarano-tech/nextjs-e-commerce.git
    cd nextjs-e-commerce
    ```

2. Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3. Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `components/`: Contains reusable React components.
- `context/`: Contains React context providers for managing state.
- `interfaces/`: Contains TypeScript interfaces.
- `app/`: Contains Next.js pages.
- `public/`: Contains static assets.
- `constants/`: Contains constants used in the app.
- `lib/`: For misc utilities, currently store the registry for styled components initialization.
- `__test__/`: Unit tests.

## Main Components

### Header

The `Header` component includes a logo, a search input, and a shopping cart icon. The search input updates the `searchTerm` in the `SearchContext`.

### ProductGrid

The `ProductGrid` component displays products in a grid layout. It receives the filtered products based on the `searchTerm` from the `SearchContext`.

### ProductItem

The `ProductItem` component displays individual product details, including an image, title, description, price tag, and an "Add to Cart" button.

### CartTable

The `CartTable` component displays the shopping cart items in a table format, allowing the user to update quantities and remove items.

### EmptyCart

The `EmptyCart` component displays a message when the cart is empty.

### Loader

The `Loader` component displays a spinner when the cart and products are loading.

## Context Providers

### CartContext

Manages the state of the shopping cart, including adding, updating, and removing items.

### SearchContext

Manages the `searchTerm` used to filter products.

## Testing

We use `vitest` and `@testing-library/react` for unit testing.

### Running Tests

To run tests, use the following command:

```bash
npm test
# or
yarn test
