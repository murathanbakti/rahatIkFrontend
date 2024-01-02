# Rahat IK - Fullstack Application

This repository contains the fullstack React + Express.js project named "Rahat IK." The project aims to manage debt information associated with account numbers. The frontend is deployed on Vercel, and the backend is deployed on Render.com.

## Live Demo

You can access the live demo of the frontend [here](https://rahat-ik-frontend.vercel.app/).

## Backend

The backend of this project is deployed on Render.com. You can access it [here](https://rahatikbackend.onrender.com/).

## Accessing the Website

Upon visiting the website, the first page you encounter is the login page. Use the following credentials for testing:

- **Username:** testapi
- **Password:** test123


## Installation
### Frontend

To run the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/project-name-frontend.git

2. Navigate to the project directory:

   ```bash
   cd project-name-frontend

3. Install dependencies:

   ```bash
   npm install

4. Start the development server:

   ```bash
   npm start

### Backend 
 To run the backend locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rahat-ik-backend.git

2. Navigate to the project directory:

   ```bash
   cd rahat-ik-backend

3. Install dependencies:

   ```bash
   npm install
The backend dependencies include:
```json
"dependencies": {
  "bcrypt": "^5.1.1",
  "body-parser": "^1.20.2",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "express": "^4.18.2",
  "express-session": "^1.17.3",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.0.1",
  "nodemon": "^3.0.1"
}
```

4. Start the development server:

   ```bash
   npm start

## Authentication Controllers

This section outlines the authentication controllers responsible for user registration and login in the backend of "Rahat IK."

### Register

**Endpoint:** `/api/auth/register`

Register a new user.

- **Method:** `POST`
- **Request Body:**

```json
{
  "username": "example_user",
  "password": "example_password"
}
```
- Response
```json
{
  "message": "User registered successfully"
}
```
### Login

**Endpoint:** `/api/auth/login`

Authenticate and log in a user.

- **Method:** `POST`
- **Request Body:**

```json
{
  "username": "example_user",
  "password": "example_password"
}
```
- Success Response 

```json
{
  "response": {
    "token": "example_token"
    // Additional user-related information if needed
  },
  "messages": [
    {
      "code": "0",
      "message": "OK"
    }
  ]
}
```
- Error Response 

1. Invalid Username or Password:

```json
{
  "response": null,
  "messages": [
    {
      "code": "1",
      "message": "Invalid username or password"
    }
  ]
}
```
2. Internal Server Error:
```json 
{
  "response": null,
  "messages": [
    {
      "code": "1",
      "message": "Internal Server Error"
    }
  ]
}

```
