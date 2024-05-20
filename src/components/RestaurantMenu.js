import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";

import useRestaurantMenu from "../../utils/customHooks/useRestaurantMenu";

const RestautantMenu = () => {
  const { resID } = useParams();

  const resInfo = useRestaurantMenu(resID);

  if (resInfo === null || resInfo === undefined) return <Shimmer />;

  // console.log("body resInfo", resInfo);
  const { text } = resInfo?.cards[0].card.card;
  const itemCards = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards;
  const cateroriesItemCard = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.categories;

  // console.log(cateroriesItemCard);
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
        <div>
          {cateroriesItemCard.map((cat, idx) => {
            return (
              <div key={idx}>
                {cat.itemCards.map((item, idx) => {
                  return <li key={item.card.info.id}>{item.card.info.name}</li>;
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestautantMenu;
