import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from '../components/Dashboard'
import AddExpense from '../components/AddExpense'
import EditExpense from '../components/EditExpense'
import Help from '../components/Help'
import NotFound from '../components/NotFound'
import Header from '../components/Header'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Dashboard} exact={true} />
          <Route path="/new" component={AddExpense} />
          <Route path="/edit/:id" component={EditExpense}/>
          <Route path="/help" component={Help} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default AppRouter;