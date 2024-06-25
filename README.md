# Project Pizza Hut: A Modern Online Ordering Experience

This project delivers a streamlined online ordering experience for Pizza Hut, built with React, Redux, Tailwind CSS, and Vite. Users can browse a dynamic menu retrieved from an API, effortlessly add pizzas to their cart, and submit orders with minimal information.

## Key Features

- **Seamless Ordering**: No login required; simply enter your name and get ready to order.
- **Dynamic Menu**: The menu updates automatically using an API, ensuring the latest offerings.
- **Flexible Cart**: Add and remove pizzas to customize your order with ease.
- **Simplified Checkout**: Provide your name, phone number, and address (optional GPS for faster delivery).
- **Priority Option**: Mark your order as "priority" for a 20% discount (who wouldn't?).
- **Order Tracking**: Get a unique ID to track your order status conveniently.
- **Post-Order Flexibility**: Change your mind? You can even mark your order as "priority" after placing it.

## Getting Started

1. Clone this repository.
2. Install dependencies using `npm install` or `yarn install`.
3. Configure the API endpoint details in the code (refer to the specific API documentation).
4. Run the development server with `npm run dev` or `yarn dev`.

## Technologies Used

- **Front-End Framework**: React
- **State Management**: Redux with Redux Toolkit
- **Styling**: Tailwind CSS
- **Build Tool**: Vite

## Contributing

We welcome contributions! Share your ideas by creating a pull request.

## License

This project is licensed under the [Ashiqur2279](https://www.linkedin.com/in/ashiqur2279/).

## Important Notes

- React Router DOM facilitates navigation within the app, but it's not directly used for remote state management. Redux handles the global state, including data fetched from the API.
- User interface (UI) state management is primarily handled by Redux, but React component state can also be used for specific UI interactions.
