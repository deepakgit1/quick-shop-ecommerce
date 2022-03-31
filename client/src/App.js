import './App.css';
import Navbar from './components/header/Navbar';
import Newnav from './components/newnavbar/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import Signin from './components/signup_signin/Signin';
import Signup from './components/signup_signin/Signup';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import Forgotpass from './components/forgot/Forgotpass';
import Newpassword from './components/forgot/Newpassword';
import Revieworder from './components/order/Revieworder';
import Orderplaced from './components/order/Orderplaced';


function App() {

  const [data, setData] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setData(true)
    }, 2000)
  }, [])

  return (
    <>
      {
        data ? (
          <>
            <Navbar />
            <Newnav />
            <Routes>
              <Route path='/' element={<Maincomp />} />
              <Route path='/login' element={<Signin />} />
              <Route path='/register' element={<Signup />} />
              <Route path='/getproductsone/:id' element={<Cart />} />
              <Route path='/buynow' element={<Buynow />} />
              <Route exact path='/forgot' element={<Forgotpass />} />
              <Route path='/newpassword/:token' element={<Newpassword />} />
              <Route path='/revieworder' element={<Revieworder />} />
              <Route path='/orderplaced' element={<Orderplaced />} />
            </Routes>
            <Footer />
          </>
        ) : (
          //Loading
          <div className='circle'>
            <CircularProgress />
            <h2>Loading...</h2>
          </div>
        )
      }

    </>
  );
}

export default App;
