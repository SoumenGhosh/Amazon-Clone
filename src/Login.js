import React, {useState} from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "./firebase";

function Login() {
    const navigate = useNavigate ();    // navigate('/')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const singIn = e => {
        e.preventDefault();
        // firebase login
        //no refresh in react
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                // sign in successfully
                navigate('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        // firebase register
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a user with email and password
                console.log(auth)
                if(auth){
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    className='login__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                    alt="" 
                />
            </Link>
            <div className="login__container">
                <h1>Sing-in</h1>
                <form action="">
                    <h5>Email</h5>
                    <input type="email" placeholder='E-mail' value={email} onChange=
                    {e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" placeholder='Password' value={password} onChange=
                    {e => setPassword(e.target.value)} />

                    <button type='submit' onClick={singIn}
                     className='login__signinButton'>Sign In</button>
                </form>
                <p>
                    By Signing-in you agree to Amazon fake clone conditions of use and sale. Please see our privacy
                    notice, cookies notice and our internet based ad notice.
                </p>
                <button onClick={register} className='login__registerButton'>Create your Amazon account</button>
            </div>

        </div>
    )
}

export default Login