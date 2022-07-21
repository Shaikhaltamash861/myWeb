import React from 'react'
import './login.css';
function Login(props) {
    const {email,
    setEmail,
    password,
    setPassword,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    handleLogin,
    handleSignUp}=props

  return (
    <div className='container'>
        <div className='box' >

        <div className='sub-box'>
            <div className='title'>
                <h1><span className='spn'>E</span>-shop</h1>
            </div>
            <div className='inputs'>
                <div className='id'>
                    <input  type='text' 
                    className='inpt' 
                    required
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    placeholder='email'/>
                   <p>{emailError}</p>
                </div>
                <div className='password'>
                    <input  className='inpt' type='password' 
                    required
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    placeholder='password'/>
                   <p>{passwordError}</p>
                </div>

            </div>
            <div className='submit'>
          {
            hasAccount?(<>
            <button className='btn' onClick={handleLogin}> SignIn</button>
           
            <h4 className='des'> Don't have an account <span className='me' onClick={()=>setHasAccount(!hasAccount)}> ? Sign-up</span></h4>
           </> ):(
            <>
             <button  className='btn' onClick={handleSignUp}> SignUp</button>
           
           <h4 className='des'> Have an account <span  className='me' onClick={()=>setHasAccount(!hasAccount)}>? Sign-in</span></h4>
            </>
           )
          }
            
            </div>

        </div>
        </div>

    </div>
  )
}

export default Login