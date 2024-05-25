import { useEffect, useState } from "react";

import { MENU_API } from "../../utils/constants";

const useRestaurantMenu = (resID) => {
  const [resInfo, setResInfo] = useState(null);

  // console.log("resInfo from useRes custom hook", resInfo);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resID);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
