import React from "react";
import { Link } from "react-router-dom";

function Fooditem({ title, image_url }) {

  return (
    <div className ="bg-white">
      <Link
        to={`/SubCategory/${title}`}
        className="my-3 "
        style={{ boxShadow: "0 2px 8px 0 rgba(99,99,99,.09)" }}
      >
        <div className="relative w-[230px] h-[150px]  ">
          <img src={image_url} alt="" className="p-3 hover:scale-[0.8] transition duration-500" />
          <p
            className="absolute bg-[#e16120] px-2 py-[2px] text-white tracking-wide right-2 top-2 text-[11px] font-semibold uppercase rounded-md "
            style={{ boxShadow: "0 3px 8px rgba(0,0,0,.14)" }}
          >
            {title}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Fooditem;
