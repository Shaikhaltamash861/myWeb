import React from 'react'
import paypal from '../assets/paypal.png'
import visa from '../assets/visa.png'
import master from '../assets/master.png'
import rupay from '../assets/rupay.png'
import discover from '../assets/discover.png'
import deal from '../assets/deal.png'
import inpost from '../assets/inpost.png'
import dpd from '../assets/dpd.png'
import fedex from '../assets/fedex.png'
import dhl from '../assets/dhl.png'
import van from '../assets/van.png'
import logo from '../assets/logo.png'
import Cart from './Cart'
import './shopping.css';

function Shopping() {

  return (
    <div className='ap'>
      <div className='heading'>
        <h3 className='main title'>Shipping ans Payment</h3>
        <div className='dest'>
          <div className='img1'>
            <img src={logo} alt='a' />

          </div>
          <div>

            <hr className='line' />
          </div>
          <div className='img2'>
            <img src={van} alt='b' />

          </div>

        </div>
      </div>
      <div className='shop'>
        <div className='grid-item'>

          <div className='auths'>
            <button >LOG IN</button>
            <button> SIGN UP</button>

          </div>
          <div className='shop-info'>
            <div>
              <h3 className='main title' >Shipping information</h3>
            </div>
            <div className='ship-info'>
              <input type='text' placeholder='Email' />
              <input type='text' placeholder='Address' />
              <input type='text' placeholder='Full name' />
              <input type='text' placeholder='City' />
              <input type='text' placeholder='Last name' />
              <input type='text' placeholder='Postal Code / ZIP' />
              <input type='text' placeholder='Phone number' />
              <input type='text' placeholder='India' />
            </div>
          </div>

        </div>
        <div className='grid-item'>
          <div>
            <h3 className='main title'>
              Payment method
            </h3>
          </div>
          <div className='payment-method'>
            <div className='pay1'>

            <button> <img src={paypal} alt="paypal" /></button> 
            <button> <img src={visa} alt="visa" /></button> 
            <button> <img src={master} alt="" /></button> 
            </div>
            <div className='pay2'>

            <button> <img src={rupay} alt="" /></button> 
            <button><img src={discover} alt="" /></button> 
            <button><img src={deal} alt="" /></button> 
            </div>
          </div>
          <div>
            <h3  className='main title'>
              Dilivery method
            </h3>
          </div>
          <div className='delivery-method'>

            <div className='f-row'>
              <div className='inpost'>
                <img src={inpost} alt="paypal" />
                <p className='dolor'>$20.00</p>
              </div>
              <div className='dpd'>
                <img src={dpd} alt="visa" />
                <p className='dolor'>$12.00</p>
              </div>
            </div>
            <div className='s-row'>
              <div className='inpost'>

                <img src={dhl} alt="" />
                <p className='dolor'>$15.00</p>
              </div>
              <div className='dpd'>

                <img src={fedex} alt="" />
                <p className='dolor'>$10.00</p>
              </div>



            </div>




          </div>

        </div>
        <div className='grid-item'>
          <div>
            <h3>
              Your cart
            </h3>
          </div>
          <div>
            <Cart />
          </div>
        </div>
      </div>
         
      <div className='option'>
        <div className='back'>

        </div>
        <button className='continue'> continue Shopping</button>
        <button className='proceed'>PROCEED TO PAYMENT</button>
      </div>
    </div>
  )
}

export default Shopping