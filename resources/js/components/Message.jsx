import React from 'react';

function Message(props) {
    if (!props.message) {
        return null;
    }
    let divStyle = {
        color: 'white',
        padding: '15px',
        textAlign: 'center',
        backgroundColor: props.updated ? '#4ef04e' : '#f04e4e',
    };
    return (
        <div style={divStyle}>
            {props.message}
        </div>
    );
}

export default Message;