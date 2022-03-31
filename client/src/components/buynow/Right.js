import { React, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Right = ({ item }) => {
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
      <img src="./rightbanner1.jpg" alt="" />
      <div className="cost_right">
        <p>Your order is eligible for FREE Delivery.</p><br />
        <span style={{ color: "#565959" }}> Select this option at checkout. Details
        </span>
        <h3>Subtotal ({item.length} items): <span style={{ fontWeight: "700" }}> ₹{price}.00</span></h3>
        <NavLink to={"/revieworder"}><button className='rightbuy_btn'>Process to buy</button></NavLink>
        <div className="emi">Emi Available</div>
      </div>
    </div>
  )
}


export default Right