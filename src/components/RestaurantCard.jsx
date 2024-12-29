import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    resData?.info;

  return (
    <div className="res-card m-4 p-4 w-[250px] rounded-lg bg-gray-300 hover:bg-gray-600">
      <img
        classNam
        e="res-    rounded-lg"
        alt="resto-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo} </h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};
// higher order function
const withPopularLabel = (RestaurantCard) => {
  return () => {
    return (
      <div>
        <label>Popular</label>
        <RestaurantCard />
      </div>
    );
  };
};
export default RestaurantCard;
