import React, {Component} from 'react';
import { auth } from 'firebase';

class Message extends Component {
    constructor() {
        super()
        this.state = { 
            user: auth().currentUser,
            timestamp: Date.now() 
        }
    }

    formatTime(timestamp) {
        const d = new Date(timestamp);
        const time = `${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
        return time;
    }

    render() {
        return (
            <div className="chatalign">
                <div className="chatbox">
                    <h3>{this.state.user.email} </h3>
                    <p>{this.props.item}</p>
                    <p>{this.formatTime(this.state.timestamp)}</p>
                </div>
            </div>
        )
    }
}

export default Message;