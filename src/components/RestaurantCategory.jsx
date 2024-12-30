import ItemList from "./ItemList";

const RestaurantCategory = ({ category }) => {
  return (
    <div>
      {}
      <div className=" w-6/12 bg-gray-100 shadow-lg p-2 mx-auto my-4  items-center">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {category.title}({category.itemCards?.length})
          </span>
          <span> 🔻</span>
        </div>
        <ItemList items={category.itemCards} />
      </div>
    </div>
  );
};
export default RestaurantCategory;
