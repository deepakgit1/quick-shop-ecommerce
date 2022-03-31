import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

  const history = useNavigate()

  const [udata, setUdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: ""
  });

  // console.log(udata);

  const adddata = (e) => {
    const { name, value } = e.target;
    setUdata(() => {
      return {
        ...udata,
        [name]: value
      }
    })
  };

  const senddata = async (e) => {
    e.preventDefault();
    const { fname, email, mobile, password, cpassword } = udata
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!fname || !email || !mobile || !password || !cpassword) {
      toast.error("Please fill all data", {
        position: "top-center",
      })
    } else if (mobile.length !== 10) {
      toast.error("Invalid Mobile Number", {
        position: "top-center",
      })
    } else if (password.length < 6) {
      toast.error("Password length is too short", {
        position: "top-center",
      })
    } else if (password !== cpassword) {
      toast.error("Password not Match", {
        position: "top-center",
      })
    } else if (!regex.test(email)) {
      toast.error("Invalid Email", {
        position: "top-center",
      })
      // }else if (res.status === 422 || !data) {
      //   toast.error("Invalid details", {
      //     position: "top-center",
      //   })
    } else {
      const res = await fetch("register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fname, email, mobile, password, cpassword
        })
      });

      const data = await res.json();
      // console.log(data);
      if(res.status === 422 || !data) {
          toast.error("User already Exist", {
            position: "top-center",
          })
      }else{
        toast.success("Sign Up Successful.", {
          position: "top-center",
        })
        setUdata({ ...udata, fname: "", email: "", mobile: "", password: "", cpassword: "" })
        history("/login")  
      }
      
    }

  };

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogo2.png" alt="signuplogo" />
          </div>
          <div className="sign_form">
            <form method='POST' action="">
              <h1>Sign-Up</h1>
              <div className="form_data">
                <label htmlFor="text">Your Name</label>
                <input type="text"
                  // onChange={(e)=> setUdata({...udata,fname:e.target.value})}
                  onChange={adddata}
                  value={udata.fname}
                  name='fname' id='fname' />
              </div>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input type="text"
                  onChange={adddata}
                  value={udata.email}
                  name='email' id='email' />
              </div>
              <div className="form_data">
                <label htmlFor="number">Mobile</label>
                <input type="Number"
                  onChange={adddata}
                  value={udata.mobile}
                  name='mobile' id='mobile' />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input type="Password"
                  onChange={adddata}
                  value={udata.password}
                  name='password' placeholder='At least 6 characters' id='password' />
              </div>
              <div className="form_data">
                <label htmlFor="cpassword">Confirm Password</label>
                <input type="cPassword"
                  onChange={adddata}
                  value={udata.cpassword}
                  name='cpassword' id='cpassword' />
              </div>
              <button onClick={senddata} className='signin_btn'>Continue</button>

              <div className="signin_info">
                <p>Already have an Account?</p>
                <NavLink to={"/login"}>Signin</NavLink>
              </div>
            </form>
          </div>
          <ToastContainer />
        </div>
      </section>
    </>
  )
}

export default Signup