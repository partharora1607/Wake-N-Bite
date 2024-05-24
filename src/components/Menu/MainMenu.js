import { useState } from "react";
import SingleMenuCard from "./SingleMenuCard";

const MainMenu = (props) => {
  const { head, length, itemCards } = props;
  // console.log("Mainmenu : ", props);

  const [show, setShow] = useState(true);

  const onClickHandler = () => {
    // console.log("clicked!");
    show == true ? setShow(false) : setShow(true);
  };

  return (
    <div>
      <div className="w-6/12 mx-auto py-3 font-semibold text-2xl border-x-8 border-b-8 px-2 rounded-2xl flex justify-between items-center pb-4 my-10">
        <div className="cursor-pointer font-sans font-semibold" onClick={onClickHandler}>
          {head} ({length})
        </div>
        <div className="cursor-pointer" onClick={onClickHandler}>
          🔽
        </div>
      </div>
      {/* Body component */}
      <div>
        {itemCards.map((item, idx) => {
          return <SingleMenuCard key={idx} card={item?.card?.info} show={show} />;
        })}
      </div>
    </div>
  );
};

export default MainMenu;
