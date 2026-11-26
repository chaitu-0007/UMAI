
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import RestaurantCategory from "./RestaurantCategory";
import { useEffect, useState } from "react";
const RestaurantMenu = () => {

    const { resid } = useParams();

    const resInfo = useRestaurantMenu(resid);

    const name = resInfo?.cards[0]?.card?.card?.text;

   

    const { cuisines, costForTwoMessage } =
        resInfo?.cards[2]?.card?.card?.info || {};
    const regularCards =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    const categories = regularCards.filter(
        (c) =>
             c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    const maxItemsIndex = categories.reduce((bestIdx,category,idx) => {
        const currentCount = category?.card?.card?.itemCards?.length ?? 0;
        const bestCount = categories[bestIdx]?.card?.card?.itemCards?.length ?? 0;
        return currentCount > bestCount ? idx : bestIdx;

    },0);

     const [showIndex,setShowIndex]=useState(0);
    
     useEffect(()=>{
        if(categories.length>0){
            setShowIndex(maxItemsIndex);
        }
     },[resid,resInfo]);

    // Display Shimmer UI while restaurant data is loading
    if (resInfo === null) return <Shimmer />;

    return (
        <div className="min-h-screen text-center bg-[#E0F2FE] dark:bg-[#171722]  pt-6 pb-10 ">

            <h1 className="font-bold mb-6 text-3xl text-[#075985] dark:text-[#DC2626]">{name}</h1>
            <p className="  text-[#075985] dark:text-[#DC2626] font-semibold text-sm">
                {cuisines?.join(", ")} - {costForTwoMessage}
            </p>
            {/*accordioms */}
            {categories.map((category,index)=>(
                <RestaurantCategory 
                key={category?.card?.card?.categoryId}
                data = {category?.card?.card}
                ShowItems={index === showIndex}
                setShowIndex ={() => 
                    setShowIndex(showIndex === index ? null : index)}/>
        ))} 
        </div>
    );
};

// Export component for use in other files
export default RestaurantMenu;
