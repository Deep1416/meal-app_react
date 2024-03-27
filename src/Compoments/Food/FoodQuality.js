import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaUtensilSpoon } from "react-icons/fa";
function FoodQuality() {
  const [foodQuality, setFoodQuality] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const param = useParams();

  useEffect(() => {
    async function fetchFoodProduct() {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param.idMeal}`
        );
        setFoodQuality(response.data.meals[0]);
        console.log(response.data.meals[0]);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Failed to fetch data");
        setLoading(false);
      }
    }
    fetchFoodProduct();
  }, [param]);

  // console.log(foodQuality);

  if (loading) {
    return <div> Loading...</div>; // You can replace this with a more user-friendly loading indicator
  }

  if (error) {
    return <div>Error:{error}</div>;
  }

  const temp = foodQuality;

  const measure = [];
  const ingred = [];

  for (const key in temp) {
    if (key.includes("Measure") && temp[key] && temp[key] != " ") {
      measure.push(temp[key]);
    }
  }

  for (const i in temp) {
    if (i.includes("Ingredient") && temp[i]) {
      ingred.push(temp[i]);
    }
  }
  console.log(measure);
  console.log(ingred);

  return (
    <section className="max-w-screen-xl mx-auto">
      <Nav title={foodQuality.strMeal} />
      <header className="text-2xl font-bold mb-[4.8rem]  py-1 uppercase tracking-widest relative after:bg-[#e16120] after:h-1 after:absolute after:top-full after:w-20">
        <h3>Meal Details</h3>
      </header>

      <div
        className="flex justify-around bg-white p-12 gap-12 "
        style={{ boxShadow: "0 2px 8px 0 rgba(99,99,99,.2)" }}
      >
        <div className="min-h-[420px] border border-[rgba(0,0,0,.1)] h-full w-1/2">
          <img
            src={foodQuality.strMealThumb}
            alt=""
            className="w-full  object-cover"
          />
        </div>
        <div className="w-1/2">
          <div className="text-[#e16120]">
            <h3 className="py-3 border-b border-[#e16120]">
              {foodQuality.strMeal}{" "}
            </h3>
          </div>
          <div>
            <div className="py-6">
              <div className="py-4 text-lg flex items-center">
                <span className="my-1 font-bold uppercase ">CATEGORY: </span>
                <span className="ml-2">{foodQuality.strCategory}</span>
              </div>
              <div className="flex items-center">
                <span className="font-bold">Source: </span>
                <a className="ml-2" href="">
                  {foodQuality.strSource}
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-3 text-[16px] font-bold">Tags:</span>
              <ul className="flex items-center">
                <li className="text-[#e16120] border border-[#e16120] px-2 mr-[6px] rounded-sm text-sm">
                  Meat
                </li>
                <li className="text-[#e16120] border border-[#e16120] px-2 mr-[6px] rounded-sm text-sm">
                  Pie
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-[#e16120] my-12 p-4">
            <h6 className="text-[16px] mr-3 text-white">Ingredients</h6>
            <ul className="mt-3 flex flex-wrap ">
              {ingred.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 font-medium mb-[7px] text-white w-36"
                >
                  <span className="bg-[#3a9691] rounded-full inline-block h-6 w-6 pl-1 text-white border-white border ">
                    {i + 1}
                  </span>
                  <span className="">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="p-12">
        <h1 className="text-[16px] font-semibold">Measure</h1>
        <div className="bg-[rgba(0,0,0,.01)] mt-4 border border-[rgba(0,0,0,.1)]">
          {measure.length > 0 ? (
            <ul className="p-8 flex flex-wrap items-center gap-3">
              {measure.map((item, i) => (
                // if(item. == '')
               
                <li key={i} className="flex items-center gap-2 w-44">
                  <span className="mr-3 text-[16px] text-[#e16120]">
                    <FaUtensilSpoon />
                  </span>
                  <span key={i}>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export default FoodQuality;
