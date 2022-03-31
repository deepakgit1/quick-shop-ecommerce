import { React, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forgotpass = () => {

    const [logdata, setData] = useState({
        email: "",
    })
    console.log(logdata);

    const adddata = (e) => {
        const { name, value } = e.target;

        setData(() => {
            return {
                ...logdata,
                [name]: value
            }
        })
    };

    const senddata = async (e) => {
        e.preventDefault();
        const { email } = logdata

        if (email !== "") {
            const res = fetch("/forgot", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email
                })
            });

            if (res.status === 400) {
                toast.error("User not exist", {
                    position: "top-center",
                });
            } else {
                toast.success("Please Check Your Email", {
                    position: "top-center",
                })
            }

        } else {
            console.log("Please enter Email & Password")
            toast.error("Please Enter Email", {
                position: "top-center",
            });
        }

    };
    return (
        <>
            <section>
                <div className="sign_container">
                    <div className="sign_header">
                        <img src="./blacklogo2.png" alt="signinlogo" />
                    </div>

                    <div className="sign_form">
                        <form action="/forgot" method='POST'>
                            <h1>Forgot Password</h1>
                            <div className="form_data">
                                <label htmlFor="email">Email</label>
                                <input type="text" onChange={adddata} value={logdata.email} name='email' placeholder='Enter Email Address' id='email' />
                            </div>
                            <button onClick={senddata} className='signin_btn'>Submit</button>
                        </form>
                    </div>
                    
                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default Forgotpass