import { API } from "../constants";
import { useEffect, useState } from "react";

const useRestaurantNearMe = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API);

    const json = await data.json();
    // console.log("web json :", json);
    const newJson = json?.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants;

    setData(newJson);
  };

  return data;
};

export default useRestaurantNearMe;
