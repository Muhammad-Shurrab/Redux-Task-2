import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "./redux/cartSlice";
import photo from "./assets/8pvxxld3o36c1.png";

function Cart() {
  const dispatch = useDispatch();
  const title = "Gojo Saturo";
  // لجلب الاعضاء
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems);
  return (
    <>
      <div className="wrapper grid grid-cols-2 justify-center items-center">
        {cartItems.map((item) => (
          <div key={item.id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={item.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.name}
                <div className="badge badge-secondary">{item.status}</div>
              </h2>
              <p>{item.qoute}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{item.grade}</div>
              </div>
              <div className="btn-action">
                <button
                  className="btn bg-red-600"
                  onClick={() => dispatch(removeFromCart(item.id))}
                  // onClick={() => dispatch(removeFromCart({ title, photo }))}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
