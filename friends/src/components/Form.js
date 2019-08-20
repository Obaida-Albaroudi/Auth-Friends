import React, {useState} from "react";
import axios from "axios";
import { axiosWithAuth } from "../utl/axiosWith.js";



export const Form = (props) =>{

    const [friend, setFriend] = useState({
        id: "",
        name: "",
        age: "",
        email: "",
        
    })

    let handleChanges = e => {
        setFriend({...friend,
            [e.target.name]: e.target.value
        });
    };

    let pushData= (props) =>{
            axiosWithAuth()
            .post("http://localhost:5000/api/friends", props)
            .then(res =>{
                console.log("push", res)
                props.setState({
                    friends: [...props.state.friends, friend]
                })
            })
            .catch(err => console.log(err.response))
        
    
    }




    let addMember = e => {
        e.preventDefault();
        pushData(friend);
        setFriend({         
        name: "",
        age: "",
        height: "",
        id: ""
      })
    };



    return(
        <form>
            <label>Name</label><input type ="text" name="name"value={friend.name} onChange={handleChanges} placeholder="Smurf Name"/>
            <label>Age</label><input type ="text" name="age" value={friend.age} onChange={handleChanges} placeholder="Smurf Age"/>
            <label>Email</label><input type ="text" name="email" value={friend.email} onChange={handleChanges} placeholder="Smurf Height"/>
            <button onClick={addMember}>Add Friend</button>
            <p >Refresh Page to See New Friends</p>
        </form>
    )
}