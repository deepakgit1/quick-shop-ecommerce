import { React, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Newpassword = () => {

    const [logdata, setdata] = useState({
        password: "",
    });
    console.log(logdata);

    const { token } = useParams()
    console.log(token);

    const adddata = (e) => {
        const { name, value } = e.target;
        setdata(() => {
            return {
                ...logdata,
                [name]: value
            }
        })
    };

    const senddata = async (e) => {
        e.preventDefault();
        const { password } = logdata

        if (password === "") {
            toast.error("Please enter password", {
                position: "top-center",
            })
        } else {
            const res = await fetch("/newpassword", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    password,
                    token
                })
            });

            const data = await res.json();
            console.log(data);
            toast.success("Password changed Successfully.", {
                position: "top-center",
            })

            if (res.status === 422 || !data) {
                toast.error("token expired or invalid.", {
                    position: "top-center",
                })
            }
            setdata({ ...logdata, password: "" })
        }

    };

    return (
        <>
            <section>
                <div className="sign_container">
                    <div className="sign_header">
                        <img src="/blacklogo2.png" alt="signinlogo" />
                    </div>
                    
                    <div className="sign_form">
                        <form method='POST' action="">
                            <h1>Update Password</h1>
                            <div className="form_data">
                                <label htmlFor="password">Update Password</label>
                                <input type="Password"
                                    onChange={adddata}
                                    value={logdata.password}
                                    name='password' placeholder='At least 6 characters' id='password' />
                            </div>
                            <button onClick={senddata} className='signin_btn'>Continue</button>
                        </form>
                    </div>


                    <ToastContainer />
                </div>
            </section>
        </>
    )
}

export default Newpassword