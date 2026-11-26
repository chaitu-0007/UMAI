import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data,ShowItems,setShowIndex }) => {
    
    const HandleClick = () => {
        setShowIndex();
    };

    return (
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 p-4 rounded-lg bg-[#E0F2FE] font-semibold text-black transition-all duration-300 hover:bg-[#E0F2FE]/90 hover:shadow-lg hover:shadow-[#6D28D9]/40 dark:text-white dark:bg-[#171722] dark:hover:bg-[#171722]/100 dark:hover:border-[#DC2626] dark:hover:shadow-lg dark:hover:shadow-[#DC2626]/40">
                <div
                    className="cursor-pointer flex items-center justify-between"
                    onClick={HandleClick}
                >
                    <span className="font-bold text-[#075985] dark:text-[#DC2626]/90">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span className="text-sm text-[#E11D48] dark:text-white">
                        {ShowItems ? "▴" : "▾"}
                    </span>
                </div>

                {/* Accordion Body: hidden by default when ShowItems is false */}
                {ShowItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;