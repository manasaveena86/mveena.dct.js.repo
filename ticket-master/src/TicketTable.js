import React, {Component} from 'react'
import TicketRow from './TicketRow'
import axios from 'axios'
class  TicketTable extends  Component{
    constructor(){
        super()
        this.state = {
            tickets : []
           
        }
      }
         componentDidMount(){
          axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=671a7695f19b162f')
          .then((response)=>{
            const tickets = response.data
            this.setState(()=>{
              return( {
                tickets
              })
            })
          })
        }
    
render(){
    return (
        <div>
<table border="1">
<thead>
    
        <tr>
            <th>code</th>
            <th>name</th>
            <th>department</th>
            <th>priority</th>
            <th>message</th>
            <th>status</th>
            </tr>
     
</thead>
<tbody>
    {this.state.tickets.map(function(ticket){
        return (
            <TicketRow key={ticket.ticket_code}
            ticket_code={ticket.ticket_code}
            name={ticket.name}
            department ={ticket.department}
            message={ticket.message}
            priority={ticket.priority}
            status ={ticket.status}
            />
        )
    })}
    </tbody>    
</table>  
</div> 
    )
}
}
export default TicketTable