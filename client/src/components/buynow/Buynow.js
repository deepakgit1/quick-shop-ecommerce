import { Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Option from './Option'
import "./buynow.css"
import Subtotal from './Subtotal'
import Right from './Right'
import Empty from './Empty'

const Buynow = () => {

    const [cartdata, setCartdata] = useState("");
    // console.log(cartdata);

    const getdatabuy = async () => {
        const res = await fetch("/cartdetails", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json()
        // console.log(data);
        if (res.status !== 201) {
            console.log("error");
        } else {
            setCartdata(data.carts)
        }

    };

    useEffect(() => {
        getdatabuy()
    }, [])

    return (
        <>{
            cartdata.length ? <div className='buynow_section'>
                <div className="buynow_container">
                    <div className="left_buy">
                        <h1>Shopping cart</h1>
                        <p>Select all item</p>
                        <span className="leftbuyprice">Price</span>
                        <Divider />

                        {cartdata.map((e, k) => {
                            return (
                                <>
                                    <div className="item_containert">
                                        <img src={e.detailUrl} alt="" key={"uniqueid1"} />
                                        <div className="item_details">
                                            <h3>{e.title.longTitle}</h3>
                                            <h3>{e.title.shortTitle}</h3>
                                            <h3 className="diffrentprice">₹4049.00</h3>
                                            <p className="unusuall">Usually dispatched in 8 days.</p>
                                            <p>Eligible for FREE Shipping</p>
                                            <img src="./blacklogo2.png" alt="logo" />
                                            <Option deletedata={e.id} get={getdatabuy} />
                                        </div>
                                        <h3 className='item_price'>₹{e.price.cost}.00</h3>
                                    </div>
                                    <Divider />
                                </>
                            )
                        })}


                        <Subtotal item={cartdata} />
                    </div>
                    <Right item={cartdata} />
                </div>
            </div> : <Empty />
        }

        </>
    )
}

export default Buynow