import  { useState, useEffect, useCallback } from 'react';


let logoutTimer;

export const useAuth = () => {
    const [token, setToken] = useState(false);
    const [tokenExpirationDate, setTokenExpirationDate] = useState();
    const [userId, setUserId] = useState(false);
  
    const login = useCallback((uid, token,expirationDate) => {
      setToken(token);
      setUserId(uid);
      // checking whether expiration date exists or creating new expiration date
      const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 *60*60 );
      setTokenExpirationDate(tokenExpirationDate)
      localStorage.setItem(
        "userData",
        JSON.stringify({
          userId: uid,
          token: token,
          expiration: tokenExpirationDate.toISOString(),
        })
      );
      // stores the token in localStorage which helps to auto login
    }, []);
    const logout = useCallback((uid) => {
      setToken(null);
      setTokenExpirationDate(null);
      setUserId(uid);
      localStorage.removeItem("userData");
    }, []);
  
    useEffect(()=>{
      if(token && tokenExpirationDate){
        const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
        logoutTimer =setTimeout(logout,remainingTime)
      }else{
        clearTimeout(logoutTimer);
      }
    },[token,logout, tokenExpirationDate]);
  
    // To fetch whether a user is logged in so that his ID and token are stored in local storage
    useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem("userData"));
      // checking stored date is greater than current date time through new Date method
      if (storedData && storedData.token && new Date(storedData.expiration)>new Date()) {
        login(storedData.userId, storedData.token, new Date(storedData.expiration));
      }
    }, [login]); 
    return {token, login,logout,userId}
};
