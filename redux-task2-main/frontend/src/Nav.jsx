import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
function Nav() {
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <Link to="/cart">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </Link>
                <span className="badge badge-sm indicator-item">
                  {cartItems.length}
                </span>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <Link to="/">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="data:image/jpeg;base64,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"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
