import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { ResData } = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
    } = ResData;

    return (
        <div className="w-[320px] h-[380px] shrink-0 m-4 p-4 rounded-2xl bg-[#E0F2FE] text-[#1E293B] border border-[#DDD6FE] shadow-lg shadow-[#6D28D9]/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#6D28D9] hover hover:shadow-[#6D28D9]/25 dark:bg-[#171722] dark:text-[#E5E7EB] dark:border-[#374151] dark:shadow-[#DC2626]/10 dark:hover:border-[#DC2626] dark:hover:shadow-[#DC2626]/30" >
            <div className="card-logo">
                <img
                    className="w-full h-[180px] object-cover rounded-xl"
                    alt="card-logo"
                    src={CDN_URL + cloudinaryImageId}
                />
            </div>

            <h3 className="text-xl font-bold mt-3 text-[#075985] dark:text-[#F87171]">{name}</h3>
            <h4 className="text-sm text-[#334155] mt-2 dark:text-[#D1D5DB]">{cuisines.join(", ")}</h4>
            <h4 className="mt-2 text-[#0F172A] dark:text-[#E5E7EB]">{costForTwo}</h4>
            <h4 className="mt-2 font-bold text-[#0369A1] dark:text-[#DC2626]">{avgRating}</h4>
        </div>
    );
};

 export const withPromotedLabel = (RestaurantCard) =>{
    return(props)=>{
        return(
            <div>
                <label>
                    Promoted
                </label>
                <RestaurantCard{...props}/>
            </div>
        );
    };
};

export default RestaurantCard;