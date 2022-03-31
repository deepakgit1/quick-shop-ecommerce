import { CircularProgress, Divider } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Features from './Features'
import Rightpart from './Rightpart'
import "./review.css"
import Total from './Total'
import { LoginContext } from '../context/ContextProvider'


const Revieworder = () => {
    const { account, setAccount } = useContext(LoginContext);

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
                        <h1 className='heading'>Review Your Order</h1>
                        <p style={{ color: "black" }}>By placing your order, you agree to QuickShop's privacy notice and conditions of use.</p>
                        <Divider />
                        <div className="user_details">
                            <p>Deliver to : <b>{account.fname}</b></p>
                            <p>Mobile : <b>{account.mobile}</b></p>
                            <p>Email : <b>{account.email}</b></p>
                        </div>
                        <span className="leftbuyprice">Price</span>
                        <Divider />

                        {
                            cartdata.map((e, k) => {
                                return (
                                    <>
                                        <div className="item_container">
                                            {/* <img src={e.detailUrl} alt="" /> */}
                                            <div className="item_details">
                                                <h3>{e.title.longTitle}</h3>
                                                <p><b>{e.description}</b></p>
                                                {/* <p><b>{e.title.shortTitle}</b></p> */}
                                                <img src="./blacklogo2.png" alt="logo" />
                                                <Features deletedata={e.id} get={getdatabuy} />
                                            </div>
                                            <h3 className='item_price1'>₹ {e.price.cost}.00</h3>
                                        </div>
                                        <Divider />
                                    </>
                                )
                            })
                        }


                        <Total item={cartdata} />
                    </div>
                    <Rightpart item={cartdata} />
                </div>
            </div> : <div className='circle'>
                <CircularProgress />
                <h2>Loading...</h2>
            </div>
        }

        </>

    )
}

export default Revieworder