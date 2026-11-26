
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="min-h-screen bg-[#F1F5F9] dark:bg-[#0B0B12] text-black dark:text-white transition-colors duration-300 pt-6 pb-10">
            <div className="max-w-4xl mx-auto p-6 rounded-lg bg-white dark:bg-[#171722] shadow-md">
                <h1 className="text-3xl font-bold text-[#075985] dark:text-[#DC2626] mb-2">About Us</h1>
                <h2 className="text-xl font-semibold mb-6">This is my first serious project</h2>
                
                <UserClass name={"Chaitanya Gaganam"} location={"Visakhapatnam"} contact={"chaitanya_46"} />
            </div>
        </div>
    );
};

export default About;