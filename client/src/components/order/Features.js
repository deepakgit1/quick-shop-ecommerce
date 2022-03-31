import React, { useContext } from 'react'
import { LoginContext } from '../context/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./review.css"

const Features = ({ deletedata, get }) => {

  const { account, setAccount } = useContext(LoginContext);

  const removedata = async (req, res) => {
    try {
      const res = await fetch(`/remove/${deletedata}`, {
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
      } else {
        console.log("user deleted");
        setAccount(data)
        toast.error("Item Deleted!", {
          position: "top-center",
        })
        get()
      }
    } catch (error) {
      console.log("error" + error);
    }
  }


  return (
    <div className='add_remove_select'>
      <select name="" id="">
        <option value="1">Q</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p className='delete_btn' style={{ color: "#fff", cursor: "pointer" }} onClick={() => removedata(deletedata)}>Delete</p><span>|</span>
      <p className="forremovemedia">Save for Later</p><span>|</span>
      <p className="forremovemedia">See More like this</p>
      <ToastContainer />
    </div>
  )
}

export default Features