import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './component/features/User';
import themeReducer from './component/features/Theme';


// store in redux should contain all the reducers(features/actions) that the app will use
const store = configureStore({
reducer : {
  user: userReducer,
  theme: themeReducer
}

})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// Provider from the react-redux library makes sure that the App has access to all the states in the store
// We need to tell the Provider that the store that we want to use by passing it as a prop
// reducer is a function that takes in info about current state, action we want to perform and returns new value
