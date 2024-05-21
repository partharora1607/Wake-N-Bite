import IMAGE_URL from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resList } = props;
  const { name, cuisines, avgRatingString, locality, cloudinaryImageId, sla } = resList?.info;
  return (
    <div className="m-4 p-4 w-[300px] bg-gray-50 rounded-lg shadow-lg hover:bg-gray-200">
      <img className="rounded-lg shadow-lg w-[300px] h-[250px]" src={IMAGE_URL + cloudinaryImageId}></img>
      <h4 className="font-bold py-4 text-lg">{name}</h4>
      <h5 className="py-2">{cuisines.join(", ")}</h5>
      <h5 className="py-2">
        {avgRatingString} stars &nbsp;&nbsp;&nbsp; ~ {sla.deliveryTime} mins
      </h5>
      <h5 className="py-2">{locality}</h5>
    </div>
  );
};

export default RestaurantCard;
