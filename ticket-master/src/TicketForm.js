import React from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
class TableForm extends React.Component{
    constructor(){
        super()
        this.state = {
        name : '',
        department : '',
        priority : '',
        message : '',
        redirectToList:false
        
    }
}
handleCode=(event)=>{
    const code = event.target.value
    this.setState(()=>({code}))
}
handleName = (event)=>{
    const name = event.target.value
    this.setState(()=>({name}))
}
handleDepartment = (event)=>{
    const department = event.target.value
    this.setState(()=>({department}))
}

handleMessage = (event)=>{
    const message = event.target.value
    this.setState(()=>({message}))
}
handlePriority=(priority)=>{
    this.setState(()=>({priority}))
}
handleSubmit=(event)=>{
    event.preventDefault()
    const formData = {
        name : this.state.name,
        department : this.state.department,
        priority : this.state.priority,
        message: this.state.message,
        

    }
    axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=48f146e5937f7e76',formData)
    .then(response=>{
        if(!response.data.hasOwnProperty('errors')){
            const ticket = response.data
            this.props.handleSubmit(ticket)
            this.setState(()=>{
                return {
                    name :'',
                    department : '',
                    priority : '',
                    message : '',
                    redirectToList:true

                }
            })
        }
    })
    .catch((err)=>{
        console.log(err)
    })
    
}
        render(){
            if(this.state.redirectToList){
                return <Redirect to="./tickets"/>
            }
            return (
                <div>
                    <h2>Add ticket</h2>  
                        <form onSubmit={this.handleSubmit}>
                           
                            <label>name
                            <input type='text' name="name"value={this.state.name} onChange={this.handleName}/>
                            </label><br/>
                            <label>department
                            <select name="department" value={this.state.department}onChange={this.handleDepartment}>
                                <option value="">select</option>
                                <option value="Technical">Technical</option>
                                <option value="Sales">Sales</option>
                                <option value="HR">HR</option>

                                </select>
                                </label><br/>
                            <label>priority
                            <input type="radio" name="priority" value={this.state.priority}  onChange={()=>{
                                this.handlePriority('High')
                            }}/>High
                                                                    
                            <input type="radio" name="priority" value={this.state.priority} onChange={()=>{
                                this.handlePriority('Medium')
                            }}/>medium
                            <input type="radio" name="priority" value={this.state.priority} onChange={()=>{
                                this.handlePriority('Low')
                            }}/>Low
                             </label><br/>
                             <label>message
                                <textarea name="message"value={this.state.message}onChange={this.handleMessage}></textarea>
                                </label><br/><br/>
                            <input type="submit" value="Add Ticket"/>
                                    </form>  
                                    </div>
            )          
}
}
export default TableForm