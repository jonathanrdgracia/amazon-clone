
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { db, auth } from './firebase/firebase'
import './Login.css'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const history = useHistory()
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')

    const singIn =e=>{
        e.preventDefault()
        auth.signInWithEmailAndPassword(email,password)
        .then(()=>{
            history.push('/')
        }).catch(err=>{
            toast.error(`☹️ ${err}`, {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })

    }
    const register=()=>{
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(()=>{
            setPassword('')
            setEmail('')
            history.push('./')
        })
        .catch(err=>{
            toast.error(`☹️ ${err}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        })
    }
    
    return (
        <div className='login'>
            <Link to='/' >
            <img 
                className='login__logo' 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form 
                    onSubmit = { singIn }
                >
                    <h5>Email</h5>
                    <input value={ email } onChange = { e=> setEmail(e.target.value) } type='text' />
                    <h5>Password</h5>
                    <input value = { password } onChange = { e=>setPassword(e.target.value) } type='password' />
                    <button type='submit' className='login__signInButton'>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick = {register} className='login__registerButton'>Create your amazon clone account</button>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login
 