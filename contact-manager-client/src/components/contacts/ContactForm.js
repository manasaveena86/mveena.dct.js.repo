import React from 'react'
class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name :props.name?props.name:'',
            email : props.email?props.email:'',
            mobile :props.mobile?props.mobile:''
        }
        this.nameChange=this.nameChange.bind(this)
        this.emailChange=this.emailChange.bind(this)
        this.mobileChange=this.mobileChange.bind(this)
    }
    nameChange(event){
        const name=event.target.value
        this.setState(()=>({name}))
    }
    emailChange(event){
        const email=event.target.value
        this.setState(()=>({email}))
    }
    mobileChange(event){
        const mobile=event.target.value
        this.setState(()=>({mobile}))
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        const formData={
            name :this.state.name,
            email : this.state.email,
            mobile : this.state.mobile
        }
        this.props.handleContact(formData)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>name
                        <input type="text" value={this.state.name} onChange={this.nameChange}/>
                    </label><br/>
                    <label>email
                        <input type="text" value={this.state.email} onChange={this.emailChange}/>
                    </label><br/>
                    <label>mobile
                        <input type="text" value={this.state.mobile} onChange={this.mobileChange}/>
                    </label><br/>
                    <input type="submit" value="submit"/>
                </form>
            </div>
        )
    }
}
export default ContactForm