
# Goal Tracking API

This is a RESTful API for a Goal Tracking application built with Node.js, Express, MongoDB, and Mongoose. It supports user authentication and basic CRUD operations for managing goals, allowing users to create, update, delete, and retrieve goals. Each goal is associated with a user, ensuring that users can only access or modify their own goals.

## Features

- **User Registration & Authentication**: Users can register and log in, with authentication using JSON Web Tokens (JWT).
- **CRUD Operations on Goals**: Create, read, update, and delete goals.
- **User-Specific Goals**: Users can only access or modify goals associated with their own accounts.
- **Protected Routes**: Authentication is required for accessing goals.

## Technologies Used

- **Node.js** and **Express** for building the server and handling routing.
- **MongoDB** and **Mongoose** for data storage and modeling.
- **bcryptjs** for password hashing.
- **jsonwebtoken** for authentication and authorization.
- **express-async-handler** for handling async errors in Express routes.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/goal-tracking-api.git
   cd goal-tracking-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables. Create a `.env` file in the root directory and add the following:
   ```plaintext
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication Routes

- **POST /api/users/register**: Register a new user.
- **POST /api/users/login**: Log in an existing user and receive a JWT.

### User Routes

- **GET /api/users/me**: Get details of the logged-in user (protected route).

### Goal Routes

- **GET /api/goals**: Retrieve all goals of the logged-in user (protected).
- **POST /api/goals**: Create a new goal (protected).
- **GET /api/goals/:id**: Retrieve a specific goal by ID (protected).
- **PUT /api/goals/:id**: Update a goal by ID (protected).
- **DELETE /api/goals/:id**: Delete a goal by ID (protected).

## Example Request and Response

**Register User**
   ```http
   POST /api/users/register
   Content-Type: application/json

   {
     "username": "exampleuser",
     "email": "user@example.com",
     "password": "password123"
   }
   ```
   **Response**
   ```json
   {
     "__id": "user_id",
     "username": "exampleuser",
     "email": "user@example.com",
     "token": "jwt_token"
   }
   ```

## Project Structure

```plaintext
goal-tracking-api/
src/
  ├── Db/
  │   └── connectDb.js              # MongoDB connection setup
  ├── controllers/
  │   ├── goal.controllers.js # Goal-related controllers
  │   └── user.controllers.js # User authentication controllers
  ├── middleware/
  │   ├── auth.middleware.js  # JWT verification middleware
  ├── models/
  │   ├── goal.model.js       # Goal model
  │   └── user.model.js       # User model
  ├── routes/
  │   ├── goal.routes.js      # Goal routes
  │   └── user.routes.js      # User routes
├── .env                    # Environment variables
├── server.js               # Entry point for the server
└── README.md               # Project documentation
```

## Error Handling

The application uses a global error handler with custom error classes to handle exceptions and provide structured error messages to clients.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

This project was built with the help of various Node.js and MongoDB resources available online. Special thanks to the open-source community for making this project possible.
