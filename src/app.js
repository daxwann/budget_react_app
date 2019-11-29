import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { createStore, combineReducers } from 'redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Add expense reducer
// Remove expense reducer
// Edit expense reducer
// Set text filter reducer 
// Sort by date reducer
// Sort by amount reducer
// Set start date reducer
// Set end date reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

// Store create

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    filters: filterReducer
  })
);

console.log(store.getState());

const demoState = {
  expenses: [
    {
      id: "1",
      description: "January Rent",
      note: 'This was the final payment for that address',
      amount: 1000,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

ReactDOM.render(<AppRouter/>, document.getElementById('app'));