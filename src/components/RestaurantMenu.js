import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";

import { MENU_API } from "../../utils/constants";

const RestautantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resID } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resID);
    const json = await data.json();
    setResInfo(json.data);
    // const res = json?.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants;
  };

  if (resInfo === null) return <Shimmer />;

  const { text } = resInfo?.cards[0].card.card;
  const itemCards = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
  console.log(resInfo);

  return (
    <div>
      <h1>{text}</h1>
      {itemCards != null ? (
        itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          );
        })
      ) : (
        <h1>wait let me fix the bug </h1>
      )}
    </div>
  );
};

export default RestautantMenu;
