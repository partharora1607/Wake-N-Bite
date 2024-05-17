import { useState } from "react";
import resList from "../../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // state variable

  const [listOfRestaurants, setListOfRestautants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => {
              return res.info.avgRating > 4;
            });
            setListOfRestautants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* res card */}
        {listOfRestaurants.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} resList={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
