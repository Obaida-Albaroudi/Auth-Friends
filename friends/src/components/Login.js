import React from 'react';
import axios from 'axios';

class Login extends React.Component{
    
    state= {
        username: '',
        password: ''
    };

    handleChange = e =>{
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    };

    login = e =>{
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', this.state)
        .then(res =>{

            localStorage.setItem("token", res.data.payload);
        })
        .catch (err => console.log(err.response))
    };
    

    render(){
        return(
            <div>
                <form onSubmit={this.login}>

                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>

                   < input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>

                   <button>Log In</button>

                </form>

            </div>

        );

    }
}

export default Login;