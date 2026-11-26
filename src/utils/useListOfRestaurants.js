import { useState ,useEffect } from "react";

const useListOfRestaurants=()=>{
    const [ListOfRestaurants,setListOfRestaurants]=useState([]);
    const [TheFilteredRestaurant,setTheFilteredRestaurants]=useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListOfRestaurants(restaurants);
        setTheFilteredRestaurants(restaurants);
    };
    return {
        ListOfRestaurants,
        TheFilteredRestaurant,
        setTheFilteredRestaurants,
    };
};

export default useListOfRestaurants;