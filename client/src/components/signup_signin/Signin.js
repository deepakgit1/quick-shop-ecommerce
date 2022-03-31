import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "./signup.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from '../context/ContextProvider';

const Signin = () => {

  const [logdata, setData] = useState({
    email: "",
    password: ""
  })
  // console.log(logdata);

  const { account, setAccount } = useContext(LoginContext);

  const history = useNavigate()


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
    const { email, password } = logdata

    if (email !== "" && password !== "") {

      const res = await fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email, password
        })
      });

      const data = await res.json();
      // console.log(data);
      setData({ ...logdata, email: "", password: "" })

      const res1 = await fetch("/validuser", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      const data1 = await res1.json()
      // setAccount(data1)

      if (res.status === 400) {
        toast.error("Invalid Details", {
          position: "top-center",
        });
      } else {
        toast.success("Login Successfully", {
          position: "top-center",
        })
        setAccount(data1)
        history("/")
      };
    } else {
      toast.error("Please enter Email & Password", {
        position: "top-center",
      })
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
            <form method='POST' action="">
              <h1>Sign-In</h1>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input type="text"
                  onChange={adddata}
                  value={logdata.email}
                  name='email' placeholder='Enter Email Address' id='email' />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input type="Password"
                  onChange={adddata}
                  value={logdata.password}
                  name='password' placeholder='At least 6 characters' id='password' />
              </div>
              <button className='signin_btn' onClick={senddata}>Continue</button>
            </form>
            {/* <NavLink to={"/forgot"}>Forgot Password</NavLink> */}
          </div>
          <div className="create_accountinfo">
            <p>New To QuickShop</p>
            <NavLink to={"/register"}><button>Create Your QuickShop Account </button></NavLink>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Signin