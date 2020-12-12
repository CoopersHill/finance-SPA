
import React from 'react'

import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import Transactions from '../components/Transactions'
import Header from '../components/Header'
import AccountManagement from '../components/accountManagement'


const AppRouter =() => (
    <BrowserRouter>
    <div>
    <Header />
    <br></br>
    <br></br>

    <Switch>
    <Route path="/"  component={AccountManagement} exact={true}/>
    <Route path="/accountManagement" component={AccountManagement} />
    <Route path="/transactions/:id" component={Transactions} />
    
    </Switch>
    </div>      
    </BrowserRouter>
  )


export default AppRouter
  