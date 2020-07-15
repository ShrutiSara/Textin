import React, {Component} from 'react';
import firebase from './services/firebase';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
    }

    login(e) {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            console.log(error);
        })
    }

    signup(e) {
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            console.log(error);
        })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return(
            <div className="wrapper">
                <form className="form-area">
                    <a href="/" className="logo">TextIn</a>
                    <div className="login-body">
                        <div className="login-form">
                            <label for="inputEmail"></label>
                            <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
                            id="inputEmail" placeholder="Email Address" className="inputBox"/>
                        </div>
                        <div className="login-form">
                            <label for="inputPassword"></label>
                            <input value={this.state.password} onChange={this.handleChange} type="password" name="password"
                            id="inputPassword" placeholder="Password" className="inputBox"/>
                        </div>
                        <button type="submit" onClick={this.login}>Sign In</button>
                        <small>New to Textin?</small>
                        <button onClick={this.signup}>Sign Up Now</button>  
                    </div>                 
                </form>
            </div>
        )
    }
}

export default Login;