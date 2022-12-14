import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id} = props.friend;
    const history = useHistory();

    const handdleClick = (friendId) => {
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    
    const friendStyle = {
        background: 'green',
        color: 'white',
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px'
    }

    
    return (
        <div style={friendStyle}>
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>
            {/* <Link to={`/friend/${id}`}> show detail of {id}</Link> */}
            <button onClick={() => handdleClick(id)}>Click me</button>
        </div>
    );
};

export default Friend;