import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12 h-auto">
            <div className="p-2 font-light  ">
              <span>{item.card.info.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs font-extralight">
              {item.card.info.description}
            </p>
          </div>

          <div className="w-3/12 h-auto">
            <div className="absolute  ">
              <button className="p-2 mx-auto my-auto  bg-white shadow-lg rounded-lg">
                Add +
              </button>
            </div>
            {item.card.info.imageId && (
              <img src={CDN_URL + item.card.info.imageId} alt="food" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
