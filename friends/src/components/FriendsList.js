import React from 'react';
import { axiosWithAuth } from "../utl/axiosWith.js";

import {Form} from "./Form.js"
import Friend from "./Friends.js"

class FriendsList extends React.Component {
    state={
        friends: []
    };

    componentDidMount(){
        this.getData();
    }


    getData = () => {
        axiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then(res =>{
                this.setState({
                    friends: res.data
                })
            })
        .catch(err => console.log(err.response))
        
    }

    


    render(){
        console.log(this.state.friends)
        return(
            <div>
                <Form props={this.state} setState={this.setState}/><br></br>

                {this.state.friends && this.state.friends.map(info => <Friend props={info} key={info.id}/>)}
           
            </div>
        )
    }
}

export default FriendsList;