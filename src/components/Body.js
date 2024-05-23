import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/customHooks/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
import { withOnlineLabel } from "./RestaurantCard";
import useRestaurantNearMe from "../../utils/customHooks/useRestaurantNearMe";
import MyMind from "./OnTopBody/MyMind";
import Footer from "./footer";

const Body = () => {
  const [listOfRestaurants, setListOfRestautants] = useState([]);
  const [seeAllRestaurants, setSeeAllRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const mainData = useRestaurantNearMe();

  useEffect(() => {
    if (mainData) {
      setListOfRestautants(mainData);
      setSeeAllRestaurants(mainData);
    }
  }, [mainData]);

  const RestaurantCardOnline = withOnlineLabel(<RestaurantCard />);

  if (seeAllRestaurants?.length === 0) {
    return <Shimmer />;
  }

  if (onlineStatus === false) {
    return <h2>Looks like you are offline! Please check your internet connection!</h2>;
  }

  return (
    <div className="body">
      {/* My Mind Component */}
      <div>
        <MyMind />
      </div>
      {/* Top Restaurant */}
      <div></div>
      <div className="flex font-mono ">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid px-5 py-2 m-3 w-12/12"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="search for restaurants"
          ></input>
          <button
            className="px-4 py-2 bg-gray-300 m-4 rounded-lg"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
              });
              filteredRestaurant.length !== 0 ? setSeeAllRestaurants(filteredRestaurant) : 1;
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="px-4 py-2 bg-gray-300 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => {
                return res.info.avgRating > 4;
              });
              setSeeAllRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {seeAllRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.Online === true ? (
              <RestaurantCardOnline resList={restaurant} />
            ) : (
              <RestaurantCard resList={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
