import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../../utils/constants";
import useOnlineStatus from "../../utils/customHooks/useOnlineStatus";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestautants] = useState([]);
  const [seeAllRestaurants, setSeeAllRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API);

    const json = await data.json();
    const newJson = json?.data?.cards[1]?.card?.card.gridElements?.infoWithStyle?.restaurants;
    setListOfRestautants(newJson);
    setSeeAllRestaurants(newJson);
  };

  if (seeAllRestaurants?.length === 0) {
    return <Shimmer />;
  }

  if (onlineStatus === false) {
    return <h2>Looks like you are offline! Please check your internet connection!</h2>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="search for restaurants and foods."
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());
              });
              filteredRestaurant.length != 0 ? setSeeAllRestaurants(filteredRestaurant) : 1;
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
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
      <div className="res-container">
        {/* res card */}
        {seeAllRestaurants.map((restaurant, index) => (
          <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
            <RestaurantCard resList={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
