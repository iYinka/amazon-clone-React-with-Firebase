// import { Link } from '@material-ui/core'
import {Link, useHistory} from 'react-router-dom'
import React, { useState } from 'react'
import './Amazon.css'
import { auth } from './firebase';



function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //Do some firebase login
        auth
            .signInWithEmailAndPassword(email, password)
            .then( auth => {
                history.push('/');
            })
            .catch( error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        //Do some firebase register
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                console.log(auth); //Successfully created new user
                if(auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className="login">
            <Link to='/'>
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt=""/>
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
                    
                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                
                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>
                </form>

                <p>By continuing, you agree to Amazon clone Conditions of Use and Privacy Notice. </p>

                <button type="submit" onClick={register} className="login__registerButton">Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
