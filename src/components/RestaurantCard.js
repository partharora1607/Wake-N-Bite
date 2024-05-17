import IMAGE_URL from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resList } = props;
  const { name, cuisines, avgRatingString, locality, cloudinaryImageId, sla } = resList.info;
  return (
    <div className="res-card">
      <img src={IMAGE_URL + cloudinaryImageId}></img>
      <h4>{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h5>
        {avgRatingString} stars &nbsp;&nbsp;&nbsp; ~ {sla.deliveryTime} mins
      </h5>
      <h5>{locality}</h5>
    </div>
  );
};

export default RestaurantCard;
