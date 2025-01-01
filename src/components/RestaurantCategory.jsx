import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ category, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {}
      <div className=" w-6/12 bg-gray-100 shadow-lg p-2 mx-auto my-4  items-center">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {category.title}({category.itemCards?.length})
          </span>
          <span> 🔻</span>
        </div>
        {showItems && <ItemList items={category.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
