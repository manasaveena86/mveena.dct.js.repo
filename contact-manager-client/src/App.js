import React, { Component } from 'react';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'
import Register from './components/users/Register'
import Login from './components/users/Login'
import ContactList from './components/contacts/ContactList'
import ContactNew from './components/contacts/ContactNew'
import ContactEdit from './components/contacts/ContactEdit'
import ContactShow from './components/contacts/ContactShow'


class App extends Component {
  
  render() {
    
    return (
      <BrowserRouter>
      <div>
        <h2>Welcome to contact-manager app</h2>
        <Link to="/users/register">Register </Link>
        <Link to="/users/login"> Login </Link>
        
        <Switch>
        <Route path="/users/register" component={Register}/>
        <Route path="/users/login" component ={Login}/>
        <Route path="/contacts" component = {ContactList} exact={true}/>
        <Route path="/contacts/new" component={ContactNew} exact={true}/>
        <Route path="/contacts/edit/:id" component={ContactEdit} exact={true}/>
        <Route path="/contacts/:id" component={ContactShow} exact={true}/>
        </Switch>
      </div>
      </BrowserRouter>
    )
  }  
}

export default App
