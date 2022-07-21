

import './App.css';
import Navbar from './component/Navbar';
import Shopping from './component/Shopping';
import Login from './component/Login';
import sign from './fire'
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged ,createUserWithEmailAndPassword,signOut,
  signInWithEmailAndPassword

} from "firebase/auth";
function App() {
  console.log("hii")
  // console.log(fire.default.auth)
  const [user ,setUser]=useState('');
  const [email ,setEmail]=useState('')
  const [password ,setPassword]=useState('')
  const [emailError ,setEmailError]=useState('')
  const [passwordError ,setPasswordError]=useState('')
  const [hasAccount ,setHasAccount]=useState(false);
  const clearInputs=()=>{
    setEmail('');
    setPassword('');
  }
  const clearError=()=>{
    setEmailError('');
    setPasswordError('');
  }
   const handleLogin=()=>{
    clearError();
    const auth=getAuth();
    signInWithEmailAndPassword(auth,email,password)
    .catch((err)=>{
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
        case "auth/wrong-password":
          setPasswordError(err.message);
          break;    

      }
    })
  }
    const handleSignUp=()=>{
      clearError();
      const auth = getAuth();
     createUserWithEmailAndPassword(auth,email,password)
      .catch((err)=>{
        switch(err.code){
          case "auth/invalid-email":
            setEmailError(err.message);
          case "auth/already-in-use":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;    
  
     }
     })
    }
     const handleLogOut=()=>{
      console.log("i am ")
      signOut(sign);
     }
     const authListener=()=>{
      const auth = getAuth();
          onAuthStateChanged(auth, (user) => {
           if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    clearInputs()
       setUser(user)
    // ...
      } else {
    // User is signed out
    // ...
    setUser('');
     }
          });
     }
   useEffect(()=>{
    authListener();
   },[user]);
   console.log(user)
  return (
    <div className="App">
      {
        user?(<>

     <Navbar handleLogOut={handleLogOut}/>
     <Shopping/>

        </>):(
          <>
          
      <Login
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      hasAccount={hasAccount}
      setHasAccount={setHasAccount}
      emailError={emailError}
      passwordError={passwordError}
      handleLogin={handleLogin}
      handleSignUp={handleSignUp}
      
      
      />
      
      </>
    )
  }
    
    </div>
  );
}

export default App;
