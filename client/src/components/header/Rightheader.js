import { React, useContext } from 'react'
import { LoginContext } from '../context/ContextProvider'
import Avatar from '@mui/material/Avatar';
import { Divider } from '@mui/material';
import { NavLink } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import "./rightheader.css"




const Rightheader = ({ logclose, Logoutuser }) => {

  const { account, setAccount } = useContext(LoginContext);

  return (
    <>
      <div className="sideimg">
        <img src="../sidelogo.jpg" alt="logo" />
      </div>
      <div className="rightheader">
        <div className="right_nav">
          {
            account ? <Avatar className='avtar2'>{account.fname[0].toUpperCase()}</Avatar> :
              <Avatar className='avtar'></Avatar>
          }
          {account ? <h3>Welcome,{account.fname.toUpperCase()}</h3> : ""}
        </div>
        <div className="nav_btn" onClick={() => logclose()}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Shop By Catagory</NavLink>
          <Divider style={{ width: "100%", marginleft: "-20px" }} />
          <NavLink to="/">My Deals</NavLink>
          {
            account ? <NavLink to="/buynow">My orders</NavLink> :
              <NavLink to="/login">My Orders</NavLink>
          }
          <Divider style={{ width: "100%", marginleft: "-20px" }} />

          <div className="flag">
            <NavLink to={"/"}>Settings</NavLink>
            <img src="" alt="" />
          </div>

          {
            account ?
              <div className="flag">
                <LogoutIcon style={{ fontSize: 18, marginRight: 4 }} />
                <h3 onClick={() => Logoutuser()} style={{ cursor: "pointer", fontWeight: 500 }}>Logout</h3>
              </div> :
              <NavLink to="login">Sing in</NavLink>
          }

        </div>
      </div>
    </>
  )
}

export default Rightheader