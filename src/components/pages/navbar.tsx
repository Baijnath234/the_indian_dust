import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineCloseCircle,
  AiOutlineShoppingCart,
  AiFillHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import Logo from "../../images/logo.png";
import ShoppingCart from "./ShoppingCart";
import SearchModal from "../common/SearchModal";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [open , setOpen] = useState(false)

  const handelClickCart = () => {
    setIsOpen(true);
  };

  const handleClickNav = () => {
    setNav(!nav);
  };

  const handleClose = () => {
    setOpen(false);
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
            <button className="wishlist-icon" onClick={() => setOpen(true)}>
              {<AiOutlineSearch />}
            </button>
          </li>
          <li className="p-4 text-lg ">
            <a className="wishlist-icon" href="/blogsPage">
              {<AiFillHeart />}Wishlist
            </a>
          </li>
          <li className="p-4 text-lg">
            <a className="wishlist-icon" href="/newsSectionPage">
              {<BiLogIn />}SingIn
            </a>
          </li>
          <li className="wishlist-icon p-4 text-lg">
            <a href="/about">About</a>
          </li>
          <li className="wishlist-icon p-4 text-lg">
            <a href="/contactPage">Contact</a>
          </li>
          <li className="wishlist-icon p-4 text-lg cart-icon ">
            <button className="cart-icon" onClick={() => handelClickCart()}>
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
            <li className="p-4 text-lg">
              <button onClick={() => setOpen(true)}>
                {<AiOutlineSearch />}
              </button>
            </li>
            <li className="p-4 text-lg wishlist-icon">
              <a href="/blogsPage">
                {<AiFillHeart />}
                <h3>Wishlist</h3>
              </a>
            </li>
            <li className="p-4 text-lg">
              <a href="/newsSectionPage">
                {<BiLogIn />}
                <h3>SingIn</h3>
              </a>
            </li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4 border-b border-gray-600">Contact</li>
            <li className="p-4 text-lg cart-icon">
              <button className="cart-icon" onClick={() => handelClickCart()}>
                {<AiOutlineShoppingCart />}
                <h3>Cart</h3>
              </button>
            </li>
          </ul>
        </div>
      </div>
      {<ShoppingCart isOpen={isOpen} setIsOpen={setIsOpen} setNav={setNav} />}
      {open && <SearchModal open={open} onClose={handleClose}/>}
    </>
  );
};

export default Navbar;
