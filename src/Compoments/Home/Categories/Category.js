import React, { useEffect, useState } from "react";
import Fooditem from "./Fooditem";
import axios from "axios";

function Category() {
 
  const [data, setData] = useState([]);

  useEffect(() => {
    async function foodItem() {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/categories.php"
        );

        setData(response.data.categories);
      } catch (error) {
        console.error(error);
      }
    }
    foodItem();
  }, []);

  return (
    <div>
      <section className="bg-[#f5f5f5]">
        <div className="max-w-screen-xl  mx-auto p-4">
          <div>
            <h1 className="tracking-widest text-2xl font-bold mb-20 py-1 uppercase relative after:bg-[#e16120] after:h-1 after:left-0 after:absolute after:top-full after:w-20">
              CATEGORIES
            </h1>
          </div>
          <div className="flex flex-wrap gap-6">
            {data.length > 0 ? (
              data.map((item) => (
                <Fooditem
                  key={item.idCategory}
                  title={item.strCategory}
                  image_url={item.strCategoryThumb}
                />
              ))
            ) : (
              <h2>Data is coming wait for a min..</h2>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Category;
