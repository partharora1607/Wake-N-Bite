import DealsForYou from "./DealsForYou";
import MainMenu from "./MainMenu";

const TopMenu = (props) => {
  const { text, cardDetails, offers, itemList, title } = props;
  console.log(props);
  const { avgRating, totalRatingsString, costForTwoMessage, cuisines, locality, sla } = cardDetails;
  return (
    <>
      {/* top of the menu */}
      <div className="w-6/12 mx-auto m-10">
        <h1 className="font-bold text-3xl m-4 p-2">{text}</h1>
        <div className="border-x-8 border-b-8 px-5 py-4 rounded-3xl shadow-2xl">
          <h2 className="font-bold py-0">
            ⭐ {avgRating} ({totalRatingsString}) . {costForTwoMessage} 💸
          </h2>
          <h2 className="py-2 text-orange-500 underline font-bold"> {cuisines.slice(0, 4).join(", ")}</h2>
          <span className="py-2 font-semibold">🏨 Outlet - </span>
          <span>{locality}</span>
          <h3 className="py-2 font-semibold border-b-2">
            ⏱ {sla.slaString ? sla.slaString.toLowerCase() : "45 - 50 mins"}
          </h3>
          <h3 className="py-2 "> 🚲 {sla.lastMileTravelString} | ₹ 48 Delivery fee will apply</h3>
        </div>
      </div>
      {/* deals for you */}
      <div className="w-6/12 mx-auto m-10">
        <h1 className="font-bold font-serif text-left text-3xl m-3 px-2">Top Deals for you 🚀</h1>
        <div className="flex flex-wrap justify-center items-center">
          {offers.map((offer, idx) => {
            return <DealsForYou key={idx} offer={offer} />;
          })}
        </div>
      </div>
      {/* main menu */}
      <div>
        <h1 className="text-3xl font-serif font-semibold w-6/12 mx-auto text-center">Menu ⚔</h1>
        <div>
          {itemList.map((item) => {
            return (
              <MainMenu
                key={item.card.card.title}
                head={item?.card?.card?.title}
                length={item?.card?.card?.itemCards?.length}
                itemCards={item?.card?.card.itemCards}
              />
            );
          })}
        </div>{" "}
        <div>
          <h1 className="text-3xl font-serif font-semibold w-6/12 mx-auto text-center">Menu ⚔</h1>
          <div>
            {itemList.map((item) => {
              return (
                <MainMenu
                  key={item.card.card.title}
                  head={item?.card?.card?.title}
                  length={item?.card?.card?.itemCards?.length}
                  itemCards={item?.card?.card.itemCards}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopMenu;
