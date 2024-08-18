# Profile-fyi MarketPlace

This fully-featured, server-side e-commerce application is built using Next.js, Tailwind CSS, Prisma, MongoDB, NextAuth, and Shadcn UI. The application allows users to browse products, add them to a cart, and manage their shopping cart. Authentication is implemented to ensure persistent sessions and cart data across user visits.

## Features

### 1. Product Listing

- Displays a grid of products fetched from the DummyJSON API.
- Users can search for products by keyword or filter them by category.
- Each product card includes:
  - Product image
  - Product name
  - Product price (formatted in currency)
  - "Add to Cart" button

### 2. Add to Cart Functionality

- Clicking the "Add to Cart" button adds the selected product to the user's shopping cart.
- The cart is dynamically updated and stored in the user's session, ensuring persistence across page reloads.
- Visual feedback confirms the addition of the product to the cart.

### 3. Cart Management

- A dedicated Cart Page allows users to:
  - View all products added to the cart.
  - Adjust the quantity of each product using increment/decrement buttons.
  - Remove individual products from the cart.
  - View a summary of the cart, including:
    - Subtotal of all items
    - Discounts applied (fixed or percentage-based)
    - Total price after discounts
  - Place an order, which pushes the order details to the Orders collection.

### 4. User Authentication

- Implemented using NextAuth with GitHub OAuth for login.
- Users can sign up with either GitHub or a credentials-based method.
  - **Note:** The same email cannot be used to sign up with both GitHub and credentials.
- Persistent sessions ensure that cart contents and user data are preserved across visits.

### 5. Order Placement

- Once an order is placed, it is saved to the Orders collection in MongoDB.
- Users can view their past orders on a dedicated Orders Page.

## Technical Specifications

### Frontend

- **Framework:** Next.js
- **Styling:** Tailwind CSS, Shadcn UI for component styling
- **State Management:** React's built-in state management
- **API Integration:** DummyJSON API for product data

### Backend

- **Database:** MongoDB (via Prisma)
- **Authentication:** NextAuth with GitHub OAuth
- **Session Management:** NextAuth for persistent user sessions

### Data Models

- **User:** Stores user information and is linked to the cart.
- **Cart:** Stores product IDs, quantities, and is linked to a user via `userId`.
- **Order:** Stores completed order details, including products and total price.

## Installation & Setup

### Prerequisites

- Node.js
- MongoDB instance
- GitHub OAuth credentials

### Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:

   - Create a `.env.local` file in the root directory.
   - Add MongoDB connection string, NextAuth configuration, and DummyJSON API URL.

   Example:

   ```env
   DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_secret
   GITHUB_ID=your_github_client_id
   GITHUB_SECRET=your_github_client_secret
   ```

4. Run database migrations:
   ```bash
   npx prisma generate
   npx prisma db push
   ```
5. Start the development server:

   ```bash
   npm run dev
   ```

6. Visit `http://localhost:3000` in your browser to use the application.

## Usage

- **Product Browsing:** Navigate through the product listing page to browse and search for products.
- **Cart Management:** Add items to the cart and manage them via the Cart Page.
- **Order Placement:** Place an order and view order history on the Orders Page.

## Evaluation Criteria

### Code Logic and Cleanliness

- The code is well-structured, with a clear separation of concerns and reusable components.
- State management efficiently tracks products and cart items.

### Design and Responsiveness

- Consistent layout and design are maintained across all pages.
- The application is responsive and works on various screen sizes.

### Completeness of Features

- All features listed in the assignment have been implemented.
- Additional features include user authentication, persistent cart storage, and order management.

## Future Enhancements

- Expanding the backend to include more advanced features like product recommendations or inventory management.
