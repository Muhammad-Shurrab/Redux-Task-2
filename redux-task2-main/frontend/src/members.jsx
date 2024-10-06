import { React, useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice";

import { sorcerers } from "./assets/team";
function Members() {
  const [results, setResults] = useState([]);
  const title = "Gojo Saturo";
  const dispatch = useDispatch();

  return (
    <>
      <div className="wrapper grid grid-cols-2 justify-center items-center">
        {sorcerers.map((sorcerer) => (
          <div key={sorcerer.id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img src={sorcerer.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {sorcerer.name}
                <div className="badge badge-secondary">{sorcerer.status}</div>
              </h2>
              <p>{sorcerer.qoute}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{sorcerer.grade}</div>
              </div>
              <div className="btn-action">
                <button
                  className="btn bg-green-600"
                  onClick={() => dispatch(addToCart(sorcerer))}
                  //   onClick={() => dispatch(addToCart({ name, image }))}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
    </>
  );
}

export default Members;
