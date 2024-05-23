import { useEffect, useState } from "react";
import useWatsOnYourMind from "../../../utils/customHooks/useWatsOnYourMind";

const MyMind = () => {
  const IMAGE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  const [itemList, setItemList] = useState([]);

  const data = useWatsOnYourMind();

  // if (data != null) console.log(data);

  useEffect(() => {
    if (data != null) setItemList(data);
  }, [data]);

  const heading = itemList?.header?.title;
  const itemCard = itemList?.gridElements?.infoWithStyle?.info;
  // console.log("item c : ", itemCard);

  if (itemCard != null) {
    return (
      <div className="">
        <h1 className="my-3 font-mono font-bold text-4xl mx-20 pt-6">{heading} 😋</h1>
        <div className="flex flex-wrap p-3 mx-auto border-b-2">
          {itemCard.map((item, idx) => {
            return (
              <div key={idx} className="px-3 cursor-pointer mx-7">
                <img className="w-[150px] h-30" src={IMAGE_URL + item?.imageId}></img>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
};

export default MyMind;
