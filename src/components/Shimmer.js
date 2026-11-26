const Shimmer = () => {
    return (
        <div className="Shimmer-container flex flex-wrap justify-center gap-6 bg-[#F1F5F9] p-6 transition-colors duration-300 dark:bg-[#0B0B12]">
            {Array.from({ length: 28 }).map((_, index) => (
                <div
                    key={index}
                    className="h-[340px] w-[280px] shrink-0 overflow-hidden rounded-2xl border border-[#DDD6FE] bg-white p-4 shadow-md transition-colors duration-300 dark:border-[#075985] dark:bg-[#171722]"
                >
                    {/* Image placeholder */}
                    <div className="h-[170px] w-full animate-pulse rounded-xl bg-[#E2E8F0] dark:bg-[#252532]" />

                    {/* Restaurant name placeholder */}
                    <div className="mt-4 h-5 w-3/4 animate-pulse rounded-md bg-[#DDD6FE] dark:bg-[#F87171]" />

                    {/* Cuisine placeholder */}
                    <div className="mt-3 h-4 w-full animate-pulse rounded-md bg-[#E2E8F0] dark:bg-[#252532] " />

                    {/* Price placeholder */}
                    <div className="mt-3 h-4 w-1/2 animate-pulse rounded-md bg-[#E2E8F0] dark:bg-[#252532]" />

                    {/* Rating placeholder */}
                    <div className="mt-4 h-5 w-1/4 animate-pulse rounded-md bg-[#38BDF8] dark:bg-[#F87171]" />
                </div>
            ))}
        </div>
    );
};

export default Shimmer;