import React from 'react'
import { useNavigate } from 'react-router-dom';
import useToastNotification from './UI/useToastNotification';

const Logout = ({ setIsLoading, setOnline }) => {
  const { toastNotification } = useToastNotification();
  const navigate = useNavigate();

  // handler for onClick
  const handleLogout = async () => {
    localStorage.removeItem('tokenString');
    setOnline(false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toastNotification(`You're logged in!`, 'success');
      navigate("/login");
      }, 1000);
  };

  return (
    <main className="logout-main">
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </main>
  )
}

export default Logout;