import React from 'react'
import axios from '../../config/axios';

import {Link,Redirect} from 'react-router-dom'
class Login extends React.Component{
    constructor(){
        super()
        this.state ={
            email:'',
            password :'',
            redirectList : false,
            isLogin : false
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleForm=this.handleForm.bind(this)
    }
    
    handleChange(event){
        event.persist()
        this.setState(()=>({
            [event.target.name] : event.target.value
        }))
    
}
handleForm(event){
    event.preventDefault()
    const formData={
        email : this.state.email,
        password : this.state.password
    }
    axios.post('/users/login',formData)
    .then((response)=>{
        const {token} =response.data
        console.log(token)
        localStorage.setItem('token',token)
        this.setState(()=>{
            return{
                email:'',
                password : '',
                redirectList:false,
                isLogin : true
            }
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}
    render(){
        if(this.state.redirectList){
            return <Redirect to="/contacts"/>
        }
        return(
            <div>
                {this.state.isLogin&&<Link to="/contacts"> contacts</Link>}
                {!this.state.isLogin&&
                <form onSubmit={this.handleForm}> 
                <label>
                    email
                    <input type="text" value={this.state.email} name="email"onChange={this.handleChange}/>
                    <br/>
                </label>
                <label>password
                    <input type="password" value={this.state.password}name="password" onChange={this.handleChange}/>
                </label><br/>
                <input type="submit" value="submit"/>

                </form>}

            </div>
        )
    }
}
export default Login