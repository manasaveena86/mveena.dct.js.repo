import React from 'react'
import axios from '../../config/axios'
class Register extends React.Component{
    constructor(){
        super()
        this.state={
            username : '',
            email : '',
            password : '',
            noticeMsg :''
        }
        this.emailChange = this.emailChange.bind(this)
        //this.passwordChange = this.passwordChange.bind(this)
        this.submitHandle = this.submitHandle.bind(this)
    }
    //es6 arrow functions for event handlers where you dont have to bind this keyword
    nameChange=(event)=>{
        const username=event.target.value
        this.setState(()=>({username}))
    }
    //regular method used fro event handlers
    emailChange(event){
        const email=event.target.value
        this.setState(()=>({email}))
    }
    passwordChange(event){
        const password=event.target.value
        this.setState(()=>({password}))
    }
    submitHandle(event){
        event.preventDefault()
        //client side validations
        const formData = {
            username : this.state.username,
            email : this.state.email,
            password : this.state.password
        }
        if(formData.username===''){
            alert('username must be filled')
        }
        else{
        axios.post('/users/register',formData)
        .then((response)=>{
            console.log(response.data)
            this.setState(()=>{
                return {
                username :'',
                email:'',
                password : '',
                noticeMsg :response.data.notice
                }

            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    }
    render(){
        return (
            <div>
                <h2>Register with us</h2>
                {this.state.noticeMsg&&<p>{this.state.noticeMsg}</p>}
                <form onSubmit={this.submitHandle}>
                    <label>username
                        <input type="text" value={this.state.username} onChange={this.nameChange}/>
                        <br/>
                    </label>
                    <label>email
                        <input type="text" value={this.state.email} onChange={this.emailChange}/>
                        <br/>
                    </label>
                    <label>password
                        <input type="password" value={this.state.password} onChange={this.passwordChange.bind(this)}/>
                    </label><br/>
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}
export default Register