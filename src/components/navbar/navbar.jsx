import React, { useContext } from "react";
import logo from '../../assets/logo.png'
import arrow from '../../assets/arrow_icon.png'
import { CoinContext } from "../Context/context";
import { Link } from "react-router-dom";
export function Navbar({}) {
 const {setCoin}= useContext(CoinContext)
 const handleselect=(e)=>{
  switch(e.target.value){
    case "usd":{
      setCoin({
        name:"usd",symbol:"$"
      })
      break;
    }
    case "eur":{
      setCoin({
        name:"eur",symbol:"ē"
      })
      break;
    }
    case "inr":{
      setCoin({
        name:"inr",symbol:"₹"
      })
      break;
    }
    default:{
      setCoin({
        name:"usd",symbol:"$"
      })
      break;
    }
  }

 }
  return (
    <div className=" grid grid-cols-3 bg-black text-[#eeeeee] font-serif h-20">
      <div className="flex items-center ml-5">
        <Link to='/'>
        <img src={logo} alt="error" />
        </Link>
      </div>
      <div className="grid items-center">
        <ul className="grid grid-cols-4 ">
          <Link to={'/'}>
            {" "}
            <li className="hover:text-[#c7bdbd] cursor-pointer">Home</li>
          </Link>
          <li className="hover:text-[#c7bdbd] cursor-pointer">Features</li>
          <li className="hover:text-[#c7bdbd] cursor-pointer">Pricing</li>
          <li className="hover:text-[#c7bdbd] cursor-pointer">Blog</li>
        </ul>
      </div>
      <div className="flex items-center gap-5 justify-center">
        <div>
          <select className="border rounded-xl p-1" onChange={handleselect}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
          </select>
        </div>
        <div className="flex items-center border p-1 bg-white text-black rounded-xl">
          <button>Sign Up</button>
          <img src={arrow} alt="" className="w-5 h-5" />
        </div>
      </div>

      <hr className="w-screen h-max" />
    </div>
  );
}
  