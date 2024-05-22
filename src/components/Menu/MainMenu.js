import SingleMenuCard from "./SingleMenuCard";

const MainMenu = (props) => {
  const { head, length, itemCards } = props;
  console.log("Mainmenu : ", props);
  return (
    <>
      <div className="w-4/12 mx-auto py-3 font-semibold text-2xl border-x-8 border-b-8 px-2 rounded-2xl flex justify-between items-center pb-4 my-10">
        <div>
          {head} ({length})
        </div>
        <div>🔽</div>
      </div>
      <div>
        {itemCards.map((item, idx) => {
          return <SingleMenuCard key={idx} card={item?.card?.info} />;
        })}
      </div>
    </>
  );
};

export default MainMenu;
