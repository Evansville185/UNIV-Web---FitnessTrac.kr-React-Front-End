import React from 'react'
import { Link, useNavigate  } from "react-router-dom";
import Featured from './Featured';
import useToastNotification from './UI/useToastNotification';

const Home = ({ setIsLoading, online, username, setUsername, setOnline, token }) => {
  const { toastNotification } = useToastNotification();
  const navigate = useNavigate();

  //show loading screen
  const Loadout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      }, 700);
  }

  //logout function
  const handleLogout = (event) => {
    localStorage.removeItem('tokenString');
    setOnline(false);
    setIsLoading(true);
    setUsername("");
    setTimeout(() => {
      setIsLoading(false);
      toastNotification(`You've logged out!\nCome back soon!`, 'success');
      navigate('/login');
    }, 700);
    console.log("logged out string", token);
  };

  return (
    <main className="home-main">
        <h1>Menu</h1>
        {online ? (
          <>
            <h2 className="home-user">{`Welcome, ${username}`}</h2>
            <button className="main-buttons" onClick={(event) => handleLogout(event)}>Logout</button>
          </>)
        : null}
        <ul>
        {online ? (
          <>
            <Link to="/myroutines" className="home-list" onClick={() => Loadout()}>My Routines</Link>
          </>)
        : null}
        {online ? null :
        <>
          <Link to="/register" className="home-list" onClick={() => Loadout()} >Register</Link >
          <Link to="/login" className="home-list" onClick={() => Loadout()}>Login</Link>
        </>
        }
          <Link to="/routines" className="home-list" onClick={() => Loadout()}>Routines</Link>
          <Link to="/activities" className="home-list" onClick={() => Loadout()}>Activities</Link>
        </ul>
        <br/>
        {!online ? null :
        <Featured online={online} token={token} />
        }
    </main>
  )
}

export default Home