import React from 'react'
import './cart.css';
function Cart() {
    const data=[
        
      {  title:"T-Shirt",
        description:"Summer Vibes",
        image:'https://p.kindpng.com/picc/s/175-1751928_png-man-grey-grey-male-t-shirt-transparent.png',
        price:`${20.0}`
    },
      {  title:"T-Shirt",
        description:"Fit T-Shirt",
        image:'https://w7.pngwing.com/pngs/549/191/png-transparent-t-shirt-sleeve-polo-shirt-clothing-shirt-tshirt-black-top.png',
        price:`${100}`
    }

    ]
  return (
    <div className='cart'>
      {
        data.map(val=>{
          return (
        <div className='row'>
            <div className='icon'>
            <img src={val.image} alt=''/>
            
            </div>
            <div className='detail'>
            <h5>{val.title}</h5>
            <h6>{val.description}</h6>
            </div>
            <div className='price'>
            <p> ${val.price} </p>
            </div>
            
        </div>
         ) })
        }
      <div className='total-price'>
        <button>Total cost  ${data[0].price}</button>

      </div>
 </div>
  )
}

export default Cart