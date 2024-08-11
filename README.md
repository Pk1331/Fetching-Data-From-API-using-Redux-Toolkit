# React Redux Async-Thunk User Data Application

[![npm version](https://badge.fury.io/js/react-redux.svg)](https://badge.fury.io/js/react-redux)

This project demonstrates how to fetch and display user data from an API using React, Redux, and Redux Toolkit's `createAsyncThunk`. The application displays the fetched data in a table format using Bootstrap for styling.

## Project Structure

```plaintext
mypro/
│
├── node_modules/          # Node.js modules
├── public/                # Public assets
├── src/
│   ├── App.jsx            # Main App component
│   ├── index.css          # Global styles
│   ├── main.jsx           # Entry point for the React Clone the repository:application
│   ├── store.js           # Redux store configuration
│   ├── user.jsx           # Users component that fetches and displays user data
└── package.json           # Project dependencies and scripts
```
## Installation

#### 1. Clone the repository:
      git clone https://github.com/yourusername/repository-name.git
      cd repository-name
#### 2. Install dependencies:
      npm install
#### 3. Start the development server:
      npm run dev
The application should now be running on http://localhost:5173.

## Usage

- The application automatically fetches user data from [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) when loaded.
- The data is displayed in a table with columns for **Id**, **Name**, **Email**, **Username**, **Phone**, and **Website**.
- The application handles loading states and error messages.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Redux**: State management library for JavaScript apps.
- **Redux Toolkit**: Official, recommended way to write Redux logic.
- **Bootstrap**: CSS framework for building responsive websites.
- **Async Thunk**: Middleware to handle asynchronous logic in Redux.
- **Vite**: Next Generation Frontend Tooling for faster development.

## Features

- Fetches user data from an external API.
- Displays user data in a responsive, styled table.
- Handles loading and error states.


