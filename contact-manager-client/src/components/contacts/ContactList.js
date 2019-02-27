import React from 'react'
import axios from '../../config/axios'
import {Link} from 'react-router-dom'
class ContactList extends React.Component{
    constructor(){
        super()
        this.state={
            contacts : []
        }
    }
    componentDidMount(){
        axios.get('/contacts',{
            headers : {
                'x-auth' :localStorage.getItem('token')
            }
        })
        .then((response)=>{
            this.setState(()=>({contacts:response.data}))
            console.log(response.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        return (
            <div>
                <h2>Listing Contacts-{this.state.contacts.length}</h2>
                <ul>
                    {this.state.contacts.map((contact)=>{
                        return <li key={contact._id}><Link to={`/contacts/${contact._id}`}>{contact.name}</Link>-{contact.email}-{contact.mobile}</li>
                    })}
                </ul>
                <Link to="/contacts/new">Addcontact</Link>
            </div>
        )
    }
}
export default ContactList