import { useState, useEffect } from "react";
import SingleItem from "./SingleItem";
import { useParams } from "react-router-dom";
import axios from "axios";

function SpecificFood() {
  const [foodData, setFoodData] = useState([]);
  const [disc, setDisc] = useState([]);
  const [categoryDescription, setCategoryDescription] = useState("");
  const { category } = useParams();

  useEffect(() => {
    async function fetchFoodItems() {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
        );
        setFoodData(response.data.meals);
      } catch (error) {
        console.error("Error fetching food items:", error);
      }
    }

    async function fetchCategoryDescription() {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );
        setDisc(response.data.categories);
        const categoryData = response.data.categories.find(
          (item) => item.strCategory === category
        );
        if (categoryData) {
          setCategoryDescription(categoryData.strCategoryDescription);
        }
      } catch (error) {
        console.error("Error fetching category description:", error);
      }
    }

    fetchFoodItems();
    fetchCategoryDescription();
  }, [category]);

  return (
    <section className="max-w-screen-xl mx-auto bg-[#f5f5f5f]">
      <div className="w-full border-[#e16120] border p-6 bg-[rgba(0, 0, 0, .02)] text-xl mt-20">
        <h2 className="font-bold text-2xl text-[#e16120]">{category}</h2>
        <p className="mt-3 opacity-[.7]">{categoryDescription}</p>
      </div>
      <div className="py-20">
        <h1 className="text-2xl py-1 mb-[4.8rem] font-bold uppercase relative after:bg-[#e16120] after:h-1 after:absolute after:top-full after:w-20 after:left-0 tracking-widest">
          MEALS
        </h1>
      </div>
      <div className="flex flex-wrap gap-7">
        {foodData.map((item) => (
          <SingleItem food={item} key={item.idMeal} />
        ))}
      </div>
    </section>
  );
}

export default SpecificFood;
