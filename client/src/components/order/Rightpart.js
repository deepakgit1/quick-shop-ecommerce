import {React, useEffect, useState } from 'react'
import "./review.css"
import CustomizedDialogs from '../Dialog/Dialog';
import Paymentform from '../Dialog/Paymentform';

const Rightpart = ({item}) => {

  const [price, setPrice] = useState(0);

  useEffect(() => {
    totalAmount()
  }, [item])

  const totalAmount = () => {
    let price = 0
    item.map((item) => {
      price += item.price.cost     //price + item.price.cost
    });
    setPrice(price)
  }

  return (
    <div className='right_buy'>
        <img src="./rightbanner.jpg" alt="" />
        <div className="cost_right">
        <p>Your order is eligible for FREE Delivery.</p><br />
         <span style={{ color: "#565959" }}> Select delivery date and time after you place your order
         </span>
         <p className="unusuall">Usually dispatched in 8 days.</p>
         <p style={{ fontWeight: "700",color:"Highlight" }}>Eligible for FREE Shipping</p>
         <h3>Total Payable ({item.length} items): <span style={{ fontWeight: "700" }}> ₹{price}.00</span></h3>
         {/* <NavLink to={"/orderplaced"}><button onClick={orderSucees} className='rightbuy_btn1'>Place Your Order</button></NavLink> */}
         <CustomizedDialogs>
           <Paymentform />
         </CustomizedDialogs>
         <div className="emi">Emi Available</div>


        </div>

    </div>
  )
}

export default Rightpart