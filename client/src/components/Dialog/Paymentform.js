import { React, useContext } from 'react'
import { LoginContext } from '../context/ContextProvider';
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';
import "./payment.css"

const Paymentform = () => {
  const { account, setAccount } = useContext(LoginContext);
  const orderSucees = () => {
    swal("Order Placed!", "Thank You for shopping with us.", "success");
  }

  return (
    <div>
      <div className="row">
        <div className="col-75">
          <div className="container">
            <form action="#">

              <div className="row">
                <div className="col-50">
                  <h3>Billing Address</h3>
                  <label for="fname"><i className="fa fa-user"></i> Full Name</label>
                  <input type="text" id="fname" name="firstname" value={account.fname} />
                  <label for="email"><i className="fa fa-envelope"></i> Email</label>
                  <input type="text" id="email" name="email" value={account.email} />
                  <label for="adr"><i className="fa fa-address-card-o"></i> Mobile</label>
                  <input type="text" id="adr" name="address" value={account.mobile} />
                  <label for="city"><i className="fa fa-institution"></i> Country</label>
                  <input type="text" id="city" name="city" value={"india"} />
                </div>

                <div className="col-50">
                  <h3>Payment</h3>

                  <label for="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i className="fa fa-cc-visa" style={{ color: "navy;" }}></i>
                    <i className="fa fa-cc-amex" style={{ color: "blue;" }}></i>
                    <i className="fa fa-cc-mastercard" style={{ color: "red;" }}></i>
                    <i className="fa fa-cc-discover" style={{ color: "orange;" }}></i>
                  </div>

                  <label for="cname">Name on Card</label>
                  <input type="text" id="cname" name="cardname" value={account.fname} />
                  <label for="ccnum">Credit card number</label>
                  <input type="text" id="ccnum" name="cardnumber" value={"1111-2222-3333-4444"} />
                  <label for="expmonth">Exp Month</label>
                  <input type="text" id="expmonth" name="expmonth" value={"September"} />

                  <div className="row">
                    <div className="col-50">
                      <label for="expyear">Exp Year</label>
                      <input type="text" id="expyear" name="expyear" value={"2035"} />
                    </div>
                    <div className="col-50">
                      <label for="cvv">CVV</label>
                      <input type="text" id="cvv" name="cvv" value={"355"} />
                    </div>
                  </div>
                </div>
              </div>

              <label>
                <input type="checkbox" checked="action" name="sameadr" /><span>Shipping address same as billing</span>
              </label>
              <NavLink to={"/orderplaced"}><button onClick={orderSucees} className='btn'>Place Your Order</button></NavLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Paymentform