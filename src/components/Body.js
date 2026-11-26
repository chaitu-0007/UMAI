import RestaurantCard  , {withPromotedLabel} from "./RestaurantCard";
import { useState } from "react";
import useListOfRestaurants from "../utils/useListOfRestaurants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    
    const [SearchText,setSearchText]=useState("");

    const {ListOfRestaurants,TheFilteredRestaurant, setTheFilteredRestaurants,} = useListOfRestaurants();

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);




    const OnlineStatus = useOnlineStatus();

    if (OnlineStatus===false)return(
        <h1>
        YOU HAVE NO INTERNET CONNECTION
        </h1>
    );
    return ListOfRestaurants.length===0 ? (<Shimmer/> ): (
        <div className="body bg-[#F1F5F9] min-h-screen text-[#1E293B] transition-colors duration-300 dark:bg-[#0B0B12] dark:text-[#E5E7EB]">
            <div className="filter flex flex-wrap items-center gap-4 rounded-xl bg-[#0C4A6E] p-4 shadow-md shadow-[#38BDF8]/20 transition-colors duration-300 dark:bg-[#171722] dark:shadow-[#DC2626]/20">
                <div className="search m-4 p-4">
                    <input type="text" placeholder="search your fav!....." className="w-96 rounded-full border border-[#CBD5E1] bg-white px-4 py-2 text-[#1E293B] placeholder:text-[#64748B] outline-none transition-all duration-300 focus:border-[#6D28D9] focus:ring-2 focus:ring-[#6D28D9]/20 dark:border-[#374151] dark:bg-[#0B0B12] dark:text-[#E5E7EB] dark:placeholder:text-[#9CA3AF] dark:focus:border-[#DC2626] dark:focus:ring-[#DC2626]/30" 
                    value={SearchText}
                    onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button
                    className="m-4 rounded-lg bg-[#6D28D9] px-4 py-2 font-semibold text-white transition-all duration-300 hover:bg-[#5B21B6] hover hover:shadow-[#6D28D9]/40 dark:bg-[#DC2626] dark:hover:bg-[#B91C1C] dark:hover:shadow-[#DC2626]/40" 
                    onClick={()=>{
                        const FilteredRestaurant = ListOfRestaurants.filter((res)=>
                            res.info.name.toLowerCase().includes(SearchText.toLowerCase())
                        );

                        setTheFilteredRestaurants(FilteredRestaurant);
                    }}>Search</button>
                </div>
                <button 
                className="self-center h-fit w-fit rounded-lg bg-[#6D28D9] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#5B21B6] hover hover:shadow-[#6D28D9]/40 dark:bg-[#DC2626] dark:hover:bg-[#B91C1C] dark:hover:shadow-[#DC2626]/40" 
                onClick={()=>{
                    const filteredList=ListOfRestaurants.filter(
                        (res)=>res.info.avgRating > 4.3
                    );
                    setTheFilteredRestaurants(filteredList);
                }}
                >
                    High Rated Restaurants
                </button>
            </div>  
            <div className="res-container m-4 flex flex-wrap items-stretch justify-center gap-6 rounded-2xl bg-[#F1F5F9] p-6 transition-colors duration-300 dark:bg-[#0B0B12]">
                {TheFilteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id}
                     to={"/restaurants/"+restaurant.info.id}>
                        {restaurant.info.promoted ?  
                        (<RestaurantCardPromoted ResData={restaurant.info}/>
                        ) : (
                            <RestaurantCard ResData={restaurant.info}/>)
                             }                     
                    </Link>                   
                ))}
            </div>
        </div>
    );
};

export default Body;