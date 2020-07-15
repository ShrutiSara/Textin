import React, {Component} from 'react';
import firebase from './services/firebase';
import TextBox from './TextBox';

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        firebase.auth().signOut();
    }

    render() {
        return(
            <div className="logout">
                <h1>TextIn</h1>
                <div className="logout-button">
                    <button onClick={this.logout}>Logout</button>
                </div>
                <TextBox />
            </div>
        )
    }
}

export default Home;