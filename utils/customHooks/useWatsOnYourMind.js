import { useEffect, useState } from "react";
import { API } from "../constants";

const useWatsOnYourMind = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const data = await fetch(API);
    const json = await data.json();
    const newJson = json?.data?.cards[0].card?.card;
    setData(newJson);
    // console.log(json);
  };

  return data;
};

export default useWatsOnYourMind;
