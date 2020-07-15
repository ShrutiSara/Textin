import React, {Component} from 'react';
import firebase from './services/firebase';
import MessageFirebase from './MessageFirebase';

class ChatFirebase extends Component {
    constructor() {
        super() 
        this.state = {
            chats: [],
            text: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({ text: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        firebase.database().ref('chats').push({ user: 'shruti@gmail.com', message: this.state.text, timestamp: this.formatTime(Date.now()) })
        this.setState({ text: '' })
    }

    formatTime(timestamp) {
        const d = new Date(timestamp);
        const time = `${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}`;
        return time;
    }

    componentDidMount() {
        const chatRef = firebase.database().ref('chats');
        chatRef.on('value', (snapshot) => {
            let chats = snapshot.val();
            let newState = [];
            for (let chat in chats) {
                newState.push({
                    id: chat,
                    user: chats[chat].user,
                    message: chats[chat].message,
                    timestamp: chats[chat].timestamp
                })
            }
            this.setState({
                chats: newState
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.chats.map((chat) => {
                    return (
                        <MessageFirebase user={chat.user} message={chat.message} timestamp={chat.timestamp} />
                    )
                })}
                <div className="typechat">
                    <form onSubmit={this.handleSubmit}>
                        <label for="inputChat"></label>
                        <input value={this.state.text} onChange={this.handleChange} type="textarea" 
                        name="text" id="inputChat" className="textarea" placeholder="Type a text" />
                    </form>
                </div>
            </div>
        )
    }
}

export default ChatFirebase;