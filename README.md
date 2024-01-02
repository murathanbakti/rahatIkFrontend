# Rahat IK - Frontend

## Overview

This repository contains the frontend part of the fullstack React + Express.js project named "Rahat IK." 
The purpose of the project is to define an account number and maintain debt information in a tabular form. The account number follows the format of three digits, a dot, two digits, another dot, and finally, four digits. When a user adds a debt, the details are listed in the table. The first three digits of the account number are determined, and clicking the "+" button to the left brings up account numbers in the format of three digits, a dot, and two digits. Clicking the "+" next to these numbers displays the debts of these subgroups, with the system aggregating debts from the smallest inclusive subsets to the larger ones.

## Dependencies

The project uses the following dependencies:

```json
"dependencies": {
  "@testing-library/jest-dom": "^5.17.0",
  "@testing-library/react": "^13.4.0",
  "@testing-library/user-event": "^13.5.0",
  "axios": "^1.6.2",
  "cra-template": "1.2.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.20.0",
  "react-scripts": "5.0.1",
  "web-vitals": "^2.1.4"
}
```

## Live Demo

You can access the live demo of the frontend [here](https://rahat-ik-frontend.vercel.app/).

## Backend

The backend of this project is deployed on Render.com. You can access it [here](https://rahatikbackend.onrender.com/).

## Accessing the Website

Upon visiting the website, the first page you encounter is the login page. Use the following credentials for testing:

- **Username:** testapi
- **Password:** test123

## Installation

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


## Deployment
The frontend is deployed using Vercel. For deployment, follow the instructions provided by Vercel and connect your repository.
