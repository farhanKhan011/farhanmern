import React, {useEffect} from 'react';
import { useAuth } from '../store/ContextApi';
import { useNavigate } from 'react-router-dom';


export const Logout = () => {

    const { UserLogout} = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        UserLogout();
        navigate("/login", { replace: true }); // Redirect to login page after logout
    }, [UserLogout, navigate]);
    
  return null;
}

export default Logout 