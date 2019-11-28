import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Dashboard = () => {
  return (
    <div>
      this is from dashboard component
    </div>
  )
}

const AddExpense= () => {
  return (
    <div>
      this is new expense page
    </div>
  )
}

const EditExpense = () => {
  return (
    <div>
      this is edit expense page
    </div>
  )
}

const Help = () => {
  return (
    <div>
      this is help page
    </div>
  )
}

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={Dashboard} exact={true}/>
      <Route path="/new" component={AddExpense}/>
      <Route path="/edit" component={EditExpense}/>
      <Route path="/help" component={Help}/>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));