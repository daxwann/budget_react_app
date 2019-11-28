import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Dashboard = () => {
  return (
    <div>
      this is from dashboard component
    </div>
  )
}

const AddExpense = () => {
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

const NotFound = () => {
  return (
    <div>
      404 - <Link to="/">Go Home</Link>
    </div>
  )
}

const Header = () => {
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="active" exact={true}>Home</NavLink>
      <NavLink to="/new" activeClassName="active">New</NavLink>
      <NavLink to="/edit" activeClassName="active">Edit</NavLink>
      <NavLink to="/help" activeClassName="active">Help</NavLink>
    </header>
  )
}

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/new" component={AddExpense} />
        <Route path="/edit" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));