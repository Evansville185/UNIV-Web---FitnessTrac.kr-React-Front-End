import React from 'react'
import { userRegister } from "../api";
import { useNavigate  } from "react-router-dom";
import useToastNotification from './UI/useToastNotification';
import InputField from './UI/InputField';
import MainButton from './UI/MainButton';

export const Register = ({username, setUsername, password, setPassword, setIsLoading}) => {
    const { toastNotification } = useToastNotification();
    const navigate = useNavigate();
    
    //handler for onsubmit
    const handleRegister = async (event) => {
        event.preventDefault();
        const result = await userRegister(username, password);
        console.log('RESULTS', result)
        if(!result.error) {
        // calling/setting token after successful registration, will be updating the client's token with the new one that the server sent back.
            setIsLoading(true);
            localStorage.setItem("tokenString", result.token)
            setTimeout(() => {
                setIsLoading(false);
                setUsername("");
                setPassword("");
                navigate("/login");
            }, 1000);
            toastNotification(`${result.message}`, 'success');
        } else {
            toastNotification(`${result.message}`, 'error');
            setIsLoading(false);
        }
    };

  return (
    <main className="register-main" >
        <h1>Fitness Trackr Registration</h1>
        <div className="register-container">
            <form onSubmit={handleRegister} id="reg-form">
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
                <MainButton formType='reg-form' btnLabel='Submit' />
            </form>
        </div>
</main>
  )
}

export default Register;