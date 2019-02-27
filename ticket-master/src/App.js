import React, { Component } from 'react';
// import axios from 'axios'
 import TicketTable from './TicketTable'
 import TicketForm from './TicketForm'
import {BrowserRouter,Link,Route} from 'react-router-dom'
import Home from './Home'


class App extends Component {
      
  render() {
    return (
      <BrowserRouter>
     <div>
       <h2>Welcome to TicketMaster</h2>
       <ul>
       <li><Link to ="/">Home </Link></li>
       <li><Link to ="/tickets">List Ticket </Link></li>
       <li><Link to="/ticket/new" > Add Ticket</Link></li>
       </ul>
       {/*when props are required to be passed component needs to be passed via a function*/ }
      <Route path="/tickets" component={TicketTable} exact={true}/>
      
      {/*when no props are required to be passed  */}
      <Route path="/ticket/new" component={TicketForm}/>
      <Route path="/" component={Home} exact="true"/>
       </div>
       </BrowserRouter>
       )
    }
  }
  export default App