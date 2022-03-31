import React, { useEffect, useState } from 'react'
import "./review.css"

const Total = ({ item }) => {

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
    <div>
      <div className="sub_item1">
        <h3>Subtotal ({item.length} items):<strong style={{ fontWeight: "700", color: "#111" }}> ₹ {price}.00</strong></h3>
      </div>
    </div>
  )
}

export default Total