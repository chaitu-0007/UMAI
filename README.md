#taberu-yo
/**
 * 
 * Header
 *  - logo
 *  - Nav items
 * Body
 *  -Search
 *  -RestaurantContainer
 *  -Restaurant card
 *    -Name ot the restaurant, star rating , delivery time 
 *    -Delivery time
 *    -img
 * 
 * Footer
 *   -copyright
 *   -links
 *   -Address 
 *   -Contact
 */

 there are two types of export - they are



















import RestaurantCard from "./Restaurantcard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [SearchText, setSearchText] = useState("");
  const [TheFilteredRestaurant, setTheFilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.6762424097577&lng=83.19058377295732&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      // Safely extract restaurant data across dynamic Swiggy card indexes
      const resData =
        json?.data?.cards?.find(
          (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
        [];

      // Fallback to empty array `|| []` prevents state from ever becoming `undefined`
      setListOfRestaurants(resData);
      setTheFilteredRestaurants(resData);
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
      setListOfRestaurants([]);
      setTheFilteredRestaurants([]);
    }
  };

  // Safe check using optional chaining `?.`
  return ListOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="Search"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const FilteredRestaurant = ListOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(SearchText.toLowerCase())
              );
              setTheFilteredRestaurants(FilteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setTheFilteredRestaurants(filteredList);
          }}
        >
          high rated restaurants
        </button>
      </div>

      <div className="res-container">
        {TheFilteredRestaurant.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            ResData={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;