import React, { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import axios from 'axios'
import SingleItem from "../Home/Meal/SingleItem";

function SectionBg() {
  const[dataFind , seDataFind] = useState([]);
  const[serach , setSeacrh] = useState('');
  const[word , setword] = useState('');

    async function foodItem() {
      setword(serach);
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`
        );
        console.log(response.data.meals);
        seDataFind(response.data.meals);

        // console.log(delicious);
      } catch (error) {
        console.error(error);
      }
    }
    
  return (
    <>
    <section className="h-[400px]">
      <div
        className=" text-center flex flex-col items-center justify-center gap-4"
        style={{
          backgroundImage: `linear-gradient( rgba(0 , 0 , 0 ,.6) , rgba(0,0,0,.7)),
         url('https://meal-psi.vercel.app/static/media/header_image.1dc0f346d407fc577d16.jpg')`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex items-center">
        <input
            type="text"
            name=""
            id=""
            placeholder="Search Recipe here..."
            className="h-[55px] min-w-[300px] px-12 text-[16px] rounded-full mr-[1.2rem] text-[#434343]"
            onChange={(e)=>(setSeacrh(e.target.value))}
          />
          <button className="bg-[#e16120] rounded-[50%] h-[55px] w-[55px] relative text-3xl pl-3 text-white" onClick={foodItem}>
            <IoSearchOutline className="  " />
          </button>
        </div>

        <h1 className=" text-3xl font-bold mt-10 text-white">
          What are your favorite cuisines?
        </h1>
        <p className = "text-white my-4 uppercase text-[16px]">PERSONALIZE YOUR EXPERIENCE</p>
      </div>
    </section>
    {
      dataFind.length > 0 ?<div className="py-10 max-w-screen-xl mx-auto">
      <h1 className="text-2xl py-1 mb-[4.8rem] font-bold uppercase relative after:bg-[#e16120] after:h-1 after:absolute after:top-full after:w-20 after:left-0 tracking-widest">
        MEALS
      </h1>
    </div> :null
    }
    <div className = "flex flex-wrap gap-7  max-w-screen-xl mx-auto">
    
      {
        
      dataFind && dataFind.map((e)=>(<SingleItem food = {e}/>))
      }
    </div>
    </>
  );
}

export default SectionBg;

