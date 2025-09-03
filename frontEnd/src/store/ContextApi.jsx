
// import { useState, useEffect, useContext, createContext ,  } from "react";
// import PropTypes from "prop-types";


// export const AuthContext = createContext();

// // const storeTokenLSF = (token) => {
// //   localStorage.setItem("token", token);
// //   setToken(TokenVal);
// // };

// export const AuthProvider = ({ children }) => {
//   // UseState 
//   const [token, setToken] = useState(localStorage.getItem("token") || null);

// // Another useState
// const [user, setUser] = useState(null);


//   //  Token Functionality
//   const storeTokenLSF = (TokenVal) =>{
//     localStorage.setItem("token", TokenVal);
//     setToken(TokenVal);
//   }
// let logedIn = !!token;



//   // Logout Functionality
//   const UserLogout = () => {
//     setToken(null);
//     return localStorage.removeItem("token");

//   }

//   const userAuthentication = async() => { 
//     try {
//       const userResponse = await fetch(`http://localhost:3000/api/auth/userData`,{
//       method:"GET",
//       headers:{ 
//         Authorization:`Bearer ${token}`
//       }
//     });
//     if(userResponse.ok){
//       const userData = await userResponse.json();
//       console.log("userData is ",userData);
//       setUser(userData);

//     }
//   }
//      catch (error) {
//       console.log("Error in fetch ",error);
//     }
//   }
  
//   useEffect(() => {
//     userAuthentication();
//   } , []);


//   return (
//     <AuthContext.Provider value={{ storeTokenLSF , UserLogout, token , logedIn }}>
//       {children}
//     </AuthContext.Provider>
//   );

// }
// export const useAuth = () => {
//   const authContextValue = useContext(AuthContext);
//   if (!authContextValue) {
//     throw new Error("useAuth must be used within AuthProvider");
//   }
//   return authContextValue;

// };

import { useState, useEffect, useContext, createContext } from "react";
import PropTypes from "prop-types";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // State for token
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  // State for user data
  const [user, setUser] = useState(null);

  // Store token in localStorage and state
  const storeTokenLSF = (TokenVal) => {
    localStorage.setItem("token", TokenVal);
    setToken(TokenVal);
  };

  // Boolean for login status
  let logedIn = !!token;

  // Logout function
  // const UserLogout = () => {
  //   setToken(null);
  //   localStorage.removeItem("token");

  // };
  // user logout
  const UserLogout = () => {  
    setToken(null);
    setUser(null);   // Clear user data on logout
    localStorage.removeItem("token");
  };
  // Fetch user authentication data
  const userAuthentication = async () => {
    if(!token) return; // If no token, skip fetching user data
    try {
      const userResponse = await fetch("http://localhost:3000/api/auth/userData", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (userResponse.ok) {
        const data = await userResponse.json();
        console.log("userData is ",data.userData);
        setUser(data.userData);
      }
    } catch (error) {
      console.log("Error in fetch ", error);
    }
  };

  useEffect(() => {
    userAuthentication();
  }, [token]); // Re-fetch user data when token changes

  return (
    <AuthContext.Provider value={{ storeTokenLSF, UserLogout, token, logedIn, user }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return authContextValue;
};
