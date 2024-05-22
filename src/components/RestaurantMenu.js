import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";

import useRestaurantMenu from "../../utils/customHooks/useRestaurantMenu";
import TopMenu from "./Menu/TopMenu";

const RestautantMenu = () => {
  const { resID } = useParams();

  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null || resInfo === undefined) return <Shimmer />;

  const text = resInfo?.cards[0]?.card?.card?.text;
  const cardDetails = resInfo?.cards[2]?.card?.card?.info;
  const offers = resInfo?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;

  const itemList = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (item) => item?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div>
      <TopMenu text={text} cardDetails={cardDetails} offers={offers} itemList={itemList} />
    </div>
  );
};

export default RestautantMenu;
