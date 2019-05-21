import React from 'react';
import './Login.css';
import { Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom';

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }
    changeHandler = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    submitHandler = event => {
        event.preventDefault();
        this.props.history.push('/table')

    }
    render() {
        return (<div className='block'>
            <form >
                <label>Email </label>
                <input className='a' type="text" id='email' placeholder='Enter email id'
                    onChange={this.changeHandler} />
                <label>Password </label>
                <input className='a' type="password" id='password' placeholder='Password'
                    onChange={this.changeHandler} />
                <Button onClick={this.submitHandler} style={{ margin: '20px', color: '#ccc' }}
                    variant="outline-info">Login</Button>
            </form>
        </div>)
    }
}

export default withRouter(Login);
