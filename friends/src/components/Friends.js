import React from "react";

const Friend = props => {
    console.log(props)
    return (
        <div>

            <p>Name: {props.props.name}</p>
            <p>Age: {props.props.age}</p>
            <p>Email: {props.props.email}</p>

        </div>
    )
}

export default Friend;