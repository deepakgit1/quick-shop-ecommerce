import { React, useContext, useEffect, useState } from 'react'
import "./navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Rightheader from "./Rightheader"
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../context/ContextProvider';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";


const Navbar = () => {

  const { account, setAccount } = useContext(LoginContext);
  // console.log(account);

  const history = useNavigate()

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [text, setText] = useState("");
  // console.log(text);                              
  const [listopen, setListopen] = useState(true);

  const { products } = useSelector(state => state.getproductsdata)


  const [dropen, setDropen] = useState(false)


  const getdetailvaliduser = async () => {
    const res = await fetch("/validuser", {
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
      console.log("Error not log in");
    } else {
      console.log("data valid");
      setAccount(data)
    }

  }

  const handleopen = () => {
    setDropen(true)
  }
  const handleclose = () => {
    setDropen(false)
  }

  const logoutuser = async () => {
    const res2 = await fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include"
    });

    const data2 = await res2.json()
    // console.log(data2);

    if (res2.status !== 201) {
      console.log("Error not log in");
    } else {
      console.log("data valid");
      // alert("logout")
      toast.success("Logout Successfull", {
        position: "top-center",
      })
      setAccount(false)
      history("/")
    }

  }

  const getText = (items) => {
    setText(items)
    setListopen(false)
  }


  useEffect(() => {
    getdetailvaliduser()
  }, [])


  return (
    <header>
      <nav>
        <div className='left'>

          <IconButton className='hamburgur' onClick={handleopen}>
            <MenuIcon style={{ color: "#fff" }} />
          </IconButton>
          <Drawer open={dropen} onClose={handleclose} >
            <Rightheader logclose={handleclose} Logoutuser={logoutuser} />
          </Drawer>

          <div className='navlogo'>
            <NavLink to={'/'}> <img src='./logo2.jpg' alt='' /></NavLink>

          </div>
          <div className="nav_searchbaar">
            <input type="text" name=''
              onChange={(e) => getText(e.target.value)}
              placeholder="Search your Products"
              id='' />
            <div className="search_icon">
              <SearchIcon />
            </div>
            {/* search filter */}
            {
              text &&
              <List className="extrasearch" hidden={listopen}>
                {
                  products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                    <ListItem>
                      <NavLink to={`/getproductsone/${product.id}`} onClick={() => setListopen(true)}>
                        {product.title.longTitle}
                      </NavLink>
                    </ListItem>
                  ))
                }
              </List>
            }
            {/* deepak */}
          </div>
        </div>
        <div className='right'>
          <div className="nav_btn">
            {
              account ? <NavLink to={"/"} onClick={logoutuser}> Sign Out</NavLink> : <NavLink to="/login">Sign in</NavLink>
            }
          </div>
          <div className="cart_btn">

            {
              account ? <NavLink to="/buynow">
                <Badge badgeContent={account.carts.length} color="secondary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink> : <NavLink to="/login">
                <Badge badgeContent={0} color="secondary">
                  <ShoppingCartIcon id="icon" />
                </Badge>
              </NavLink>
            }
            <ToastContainer />

            <p>Cart</p>
          </div>
          {
            account ? <Avatar className='avtar2'
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >{account.fname[0].toUpperCase()}</Avatar> :
              <Avatar className='avtar'
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              ></Avatar>
          }
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <MenuItem onClick={handleClose}>My account</MenuItem>
            {
              account ? <MenuItem onClick={logoutuser}><LogoutIcon style={{ fontSize: 18, marginRight: 3 }} /> Logout</MenuItem> : ""

            }
          </Menu>

        </div>
      </nav>
    </header>
  )
}

export default Navbar