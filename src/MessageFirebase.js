import React from 'react';

function MessageFirebase(props) {
    return (
        <div style={props.user === "ed@gmail.com" ? {textAlign: "left"} : {textAlign: "right"}}>
            <div className="chatalign">
                <div className="chatbox">
                    <h3>{props.user} </h3>
                    <p>{props.message}</p>
                    <p style={{fontSize: "small"}} >{props.timestamp}</p>
                </div>
            </div>
        </div>
    )
}

export default MessageFirebase;