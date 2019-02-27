import React from 'react'
import ContactForm from './ContactForm'
import axios from '../../config/axios';
class ContactNew extends React.Component{
    handleContact =(formData)=>{
        axios.post('/contacts',formData,{
            headers : {
                'x-auth' : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            // console.log(response.data)
            const contact=response.data
            //redirect
            this.props.history.push(`/contacts/${contact._id}`)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <ContactForm handleContact={this.handleContact}/>
            </div>
        )
    }
}
export default ContactNew