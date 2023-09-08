import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineCloseCircle,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import Logo from "../../images/logo.png";
import ShoppingCart from "./ShoppingCart";
import useCartTaskDetails from "../../hook/cartdetails/CartTask";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { isOpen, toggleCart } = useCartTaskDetails();

  const handleClickNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="navbar flex justify-between items-center h-24 max-w-[1240px] px-4">
        <img
          src={Logo}
          alt=""
          className="m-4"
          style={{
            width: "60px",
          }}
        />
        {/* <h1 className='w-full text-3xl front-bold text-[#00df9a]'>Navbar</h1> */}
        <ul className="hidden md:flex">
          <li className="p-4 text-lg">
            <a href="/">Search</a>
          </li>
          <li className="p-4 text-lg">
            <a href="/blogsPage">Wishlist</a>
          </li>
          <li className="p-4 text-lg">
            <a href="/newsSectionPage">Sing In</a>
          </li>
          <li className="p-4 text-lg">
            <a href="/about">About</a>
          </li>
          <li className="p-4 text-lg">
            <a href="/contactPage">Contact</a>
          </li>
          <li className="p-4 text-lg cart-icon ">
            <button className="cart-icon" onClick={toggleCart}>
              {<AiOutlineShoppingCart />}Cart
            </button>
          </li>
        </ul>
        <div onClick={handleClickNav} className="block md:hidden">
          {!nav ? (
            <AiOutlineMenu size={30} />
          ) : (
            <AiOutlineCloseCircle size={30} />
          )}
        </div>

        <div
          className={
            nav
              ? "sidebar fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <img
            src={Logo}
            alt=""
            className="m-4 w-full"
            style={{
              width: "60px",
            }}
          />
          {/* <h1 className='w-full text-3xl front-bold text-[#00df9a] m-4'>Navbar</h1> */}
          <ul className="p-4 uppercase">
            <li className="p-4 border-b border-gray-600">Search</li>
            <li className="p-4 border-b border-gray-600">Wishlist</li>
            <li className="p-4 border-b border-gray-600">Sing In</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4 border-b border-gray-600">Contact</li>
            <li className="p-4 text-lg cart-icon">
            <button className="cart-icon" onClick={toggleCart}>
              {<AiOutlineShoppingCart />}
              <h3>Cart</h3>
            </button>
          </li>
          </ul>
        </div>
      </div>
      {console.log(isOpen, "isOpen1")}
      {<ShoppingCart isOpen={isOpen} />}
    </>
  );
};

export default Navbar;
