import { React, useContext, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import "./review.css"

const Newright = ({ item, get }) => {

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

    let date = new Date()
    let displayDate = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear()
    let dt = date.toDateString()

    const history = useNavigate("")

    const { account, setAccount } = useContext(LoginContext);

    const removedata = async (req, res) => {
        try {
            await swal({
                title: "Are you sure?",
                text: "Once Cancelled, You will not be able to see this items in your cart!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then(async (willDelete) => {
                    if (willDelete) {

                        const res = await fetch(`/delete`, {
                            method: "DELETE",
                            headers: {
                                Accept: "application/json",
                                "Content-Type": "application/json"
                            },
                            credentials: "include"
                        });

                        const data = await res.json()
                        console.log(data);
                        if (res.status === 400 || !data) {
                            console.log("error");
                        }

                        swal("Order Cancelled!", {
                            icon: "info",
                        });

                        console.log("user deleted");
                        setAccount(data)
                        history("/")
                        get()
                    } else {
                        swal("Your Order will be deliver soon!");
                    }
                });

        }
        catch (error) {
            console.log("error" + error);
        }
    }


    return (
        <div className='right_buy'>
            <img src="./rightbanner.jpg" alt="" />
            <div className="cost_right">
                <p>Your order is eligible for FREE Delivery.</p><br />
                <span style={{ color: "#565959" }}> Estimate Delivery Date : <br /> <b style={{ color: "green" }}>{dt}</b>
                    <p className="unusuall">Usually dispatched in 2 days.</p>
                </span>
                <p style={{ fontWeight: "700", color: "Highlight" }}>Eligible for FREE Shipping</p>
                <h3>Total Amount ({item.length} items): <span style={{ fontWeight: "700" }}> ₹{price}.00</span></h3>
                <NavLink to={"/orderplaced"}><button onClick={removedata} className='rightbuy_btn'>Cancle Order</button></NavLink>
                <div className="emi">Emi Available</div>
                <p style={{ margin: "auto" }}>Thank You for shopping with us.</p>
                <ToastContainer />


            </div>

        </div>
    )
}

export default Newright