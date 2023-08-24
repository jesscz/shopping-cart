// import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import cart from '../assets/shopping-bag.svg'

function Navbar({ cartTotal }){
    const navigate = useNavigate()
    return (
        <div className="z-99 text-3xl w-full" >
            <div>
                <button onClick={() => navigate("/")} className="justify-self-start ml-5 italic title">
                Fresh Foods
                </button>
            </div>
            <div>
                <button onClick={() => navigate("/shop")} className="mr-5 ml-5 text-xl">
                    Shop
                </button>
                <button onClick={() => navigate("/about")} className="mr-5 text-xl">
                    About Us
                </button>
            </div>
            <div>
                <button onClick={() => navigate("/cart")} className="justify-self-end mr-3" >
                    <img src={cart} className="h-[30px] min-w-[30px] cart-button"/>
                </button>
            </div>
            
        </div>
    )
}
export default Navbar;