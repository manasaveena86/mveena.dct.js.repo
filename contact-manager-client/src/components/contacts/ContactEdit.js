import React from 'react'
import ContactForm from './ContactForm'
import axios from '../../config/axios';
class ContactEdit extends React.Component{
    constructor(){
        super()
        this.state={
            contact :{},
            isLoaded : false
        }
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
            this.setState(()=>({contact,isLoaded:true}))

        })
        .catch((err)=>{
            console.log(err)
        })
    }
    handleContact=(formData)=>{
        console.log('entered submit')
        console.log(this.state.contact._id)
        axios.put(`/contacts/${this.state.contact._id}`,formData,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
             console.log('response',response.data)
            const contact=response.data
            console.log(contact)
            //redirect
            this.props.history.push(`/contacts/${contact._id}`)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return (
            <div>
                {this.state.isLoaded&&<ContactForm 
                            name={this.state.contact.name}
                            email={this.state.contact.email}
                            mobile={this.state.contact.mobile}
                            handleContact={this.handleContact}/>}
                
            </div>
        )
    }
}
export default ContactEdit