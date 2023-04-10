import React from 'react'
import { userLogin } from "../api";
import { useNavigate } from 'react-router-dom';
import useToastNotification from './UI/useToastNotification';
import MainButton from './UI/MainButton';
import InputField from './UI/InputField';

const Login = ({username, setUsername, password, setPassword, setIsLoading, setOnline}) => {
    const { toastNotification } = useToastNotification();
    const navigate = useNavigate();

    //handler for onsubmit
    const handleLogin = async (event) => {
        event.preventDefault();
            
        const result = await userLogin(username, password);
        if(result && result.token) {
            localStorage.setItem("tokenString", result.token)
            setIsLoading(true);
            setOnline(true);
            console.log("login user", username);
            setTimeout(() => {
                setIsLoading(false);
                toastNotification(`Welcome ${username}!`, 'success');
                navigate('/myroutines');
            }, 500);
            console.log("what's in my storage",localStorage);
        } else {
            toastNotification(`Invalid Credentials`, 'error');
            setIsLoading(false);
            }
        };
  return (
    <main className="login-main">
        <h1>Fitness Trackr Login</h1>
        <div className="register-container">
            <form onSubmit={handleLogin} id="log-form">
                <InputField  
                    label={'Username'} 
                    name={'username'} 
                    type={'text'} 
                    onChange={setUsername}
                    />
                <InputField  
                    label={'Password'} 
                    name={'password'} 
                    type={'password'} 
                    onChange={setPassword}
                    />
                <MainButton formType='log-form' btnLabel='Submit' />
            </form>
        </div>
</main>
  )
}

export default Login;