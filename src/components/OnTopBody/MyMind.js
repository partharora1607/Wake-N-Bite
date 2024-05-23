import { useEffect, useState } from "react";
import useWatsOnYourMind from "../../../utils/customHooks/useWatsOnYourMind";

const MyMind = () => {
  const [itemList, setItemList] = useState([]);

  const data = useWatsOnYourMind();

  if (data != null) console.log(data);

  useEffect(() => {
    if (data != null) setItemList(data);
  }, [data]);

  const heading = itemList?.header?.title;
  // const itemCard = itemList?.gridElements?.infoWithStyle?.info;

  return (
    <div>
      <h1 className="my-3 font-mono font-bold text-4xl mx-20 pt-6">{heading}</h1>
      <div></div>
    </div>
  );
};

export default MyMind;
