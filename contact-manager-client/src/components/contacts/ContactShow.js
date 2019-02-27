import React from 'react'
import {Link} from 'react-router-dom'
import axios from '../../config/axios';
class ContactShow extends React.Component{
    constructor(){
        super()
        this.state={
            contact : {},
            isContact : false,
            text:''
            
        }
    }
    getText=(id)=>{

    }
    
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`/contacts/${id}`,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const contact=response.data
            //const text
            console.log('contact id',contact._id)
            this.getText(contact._id)
                   this.setState(()=>{
                   // console.log('setstate',text)
                    return {
                        contact : contact,
                        isContact : true,
                        
                        
                    }
                
            })
        })
            .catch((err)=>{
                console.log(err)
            })
    
            
           
    }
    handleDelete = ()=>{
        const confirmDelete=window.confirm('are you sure')
        if(confirmDelete){
            axios.delete(`/contacts/${this.state.contact._id}`,{
                headers : {
                    'x-auth' :localStorage.getItem('token')
                }
            })
            .then((response)=>{
                console.log(response.data)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
        
    }
    notesSubmit=(event)=>{
        event.preventDefault()
        const formText={
            text:this.state.text
        }
        axios.post(`/notes/${this.state.contact._id}`,formText)
        .then((response)=>{
            console.log(response.data)
        })  
        .catch((err)=>{
            console.log(err)
        })  
        
    }
        
    notesHandle=(event)=>{
        const text=event.target.value
        this.setState(()=>({ text}))
    }
    
    render(){
        return (
            <div>
               
                <h2>show one contact information</h2>
                <h2>{this.state.contact.name}</h2>
                <p>{this.state.contact.email}--{this.state.contact.mobile}{this.state.text}</p>
                
                {this.state.isContact&&<form onSubmit={this.notesSubmit}>
                    <label>add notes
                        <textarea value={this.state.text} onChange={this.notesHandle}/>
                    </label>
                    <input type="submit" value="submit"/><br/>
                </form>}
                
                <Link to={`/contacts/edit/${this.state.contact._id}`}>Edit</Link>
                   <button onClick={this.handleDelete}>delete</button>
                <Link to="/contacts">Back</Link>
            </div>
        )
    }
}
export default ContactShow