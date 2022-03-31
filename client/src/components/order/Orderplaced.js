import { CircularProgress, Divider } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Rightpart from './Rightpart'
import "./review.css"
import Total from './Total'
import { LoginContext } from '../context/ContextProvider'
import Newright from './Newright'
import Newtotal from './Newtotal'

const Orderplaced = () => {

    const { account, setAccount } = useContext(LoginContext);

    const [cartdata, setCartdata] = useState("");
    console.log(cartdata);

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
        console.log(data);
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
                        <img className='topimg' src="./blacklogo2.png" alt="logo" />
                        <h1 className='heading2'>Your order has been placed!</h1>
                        <p>Deliver to : <b>{account.fname}</b></p>
                        <p>Mobile : <b>{account.mobile}</b></p>
                        <p>Email : <b>{account.email}</b></p>
                        <span className="leftbuyprice">Price</span>
                        <Divider />

                        {
                            cartdata.map((e, k) => {
                                return (
                                    <>
                                        <div className="item_container2">
                                            <div className="item_details">
                                                <h3 style={{ textAlign: "start" }}>{e.title.longTitle}</h3>
                                                <p>{e.description}</p>
                                                <img style={{ marginBottom: "-50px" }} src={e.detailUrl} alt="" />
                                                <h3 style={{ textAlign: "end" }} className='item_price1'>₹{e.price.cost}.00</h3>
                                            </div>
                                        </div>
                                        <Divider />
                                    </>
                                )
                            })
                        }


                        <Newtotal item={cartdata} />
                    </div>
                    <Newright item={cartdata} />
                </div>
            </div> : <div className='circle'>
                <CircularProgress />
                <h2>Loading...</h2>
            </div>
        }

        </>
    )
}

export default Orderplaced