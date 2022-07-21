import React from 'react'
import './navbar.css'
import logo from '../assets/logo.png';
import user from '../assets/user.png'



function Navbar({handleLogOut}) {
  return (
    <div className='nav'>
        <div className='logo'>
            <img src={logo} alt='logo'/>
          <h5><span>E</span>-Shop</h5>  
        </div>
        <div className='menu'>
            <div>Men</div>
            <div className='d'>Women</div>
            <div className='d'>Kid</div>
            
        </div>
        <div className='items'>
            <div className='search'>     <input className='search-input' type='text' />
            <button className='search-button' type="submit"><i class="fa fa-search ib"></i></button>
            </div>
            <div className='bucket'>
            <img src={logo} alt='logo'/>

            </div>
            <div className='user'>
            <img src={user} alt='logo'/> <span onClick={handleLogOut}>logout</span>
            </div>
        
        </div>
    </div>
  )
}

export default Navbar