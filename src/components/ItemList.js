import { IndianRupee } from "lucide-react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    return (
        <div>
            {items.map((item) => {
                // 1. Declare imageId and info inside the loop block
                const info = item?.card?.info;
                const imageId = info?.imageId;

                return (
                    <div
                        className="p-2 m-2 border-[#6D28D9]/40 dark:border-[#DC2626]/20 border-b-2 flex justify-between items-start gap-4"
                        key={info?.id}
                    >
                        {/* Left: Name, Price, Description */}
                        <div className="flex-1 text-left">
                            <div className="flex flex-col">
                                <span className="font-medium">{info?.name}</span>
                                <span className="inline-flex items-center text-sm">
                                    <IndianRupee size={14} />
                                    <span>
                                        {(info?.price ?? info?.defaultPrice ?? 0) / 100}
                                    </span>
                                </span>
                            </div>
                            <p className="text-xs mt-1">{info?.description}</p>
                        </div>
                        <div className="flex flex-col items-center gap-1.5 shrink-0">
                        {/* Right: Image (only rendered when imageId exists) */}
                        {imageId && (
                            <img
                                src={`${CDN_URL}${imageId}`}
                                alt={info?.name || "Menu item"}
                                className="w-24 h-20 object-cover rounded-lg shrink-0"
                            />
                        )}
                        <button className="p-2 mx-16 cursor-pointer shadow-lg m-auto bg-white dark:bg-black hover:border-[#E0F2FE]  dark:hover:border-red-800">Add to cart</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;