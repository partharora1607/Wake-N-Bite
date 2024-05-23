import IMAGE_URL from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resList } = props;
  const { name, cuisines, avgRatingString, locality, cloudinaryImageId, sla } = resList?.info;
  return (
    <div className="m-4 p-4 w-[300px] bg-gray-50 rounded-lg shadow-lg hover:bg-gray-200">
      <img className="rounded-lg shadow-lg w-[300px] h-[250px]" src={IMAGE_URL + cloudinaryImageId}></img>
      <h4 className="font-semibold py-4 text-lg font-mono">{name}</h4>
      <h5 className="py-2 text-gray-500 font-serif">{cuisines.slice(0, 3).join(", ")}</h5>
      <h5 className="py-2 font-mono">
        {avgRatingString} ⭐ &nbsp;&nbsp;&nbsp; ~ {sla.deliveryTime} mins ⏳
      </h5>
      <h5 className="py-2 font-mono">{locality}</h5>
    </div>
  );
};

export const withOnlineLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Online</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
