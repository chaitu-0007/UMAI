import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { ShoppingBag ,House,Info,Mail,UserRound,History,LogIn} from "lucide-react";
import UserContext from "../utils/UserContext"

const Header = ({ isDarkMode, setIsDarkMode }) => {
    const [BtnNameReact, setBtnNameReact] = useState("login");
    const OnlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);
    return (
        <div className="sticky top-0 flex justify-between items-center bg-[#DCE3ED] backdrop:blur-md duration-300 shadow-lg px-6 py-3 z-50 transition-colors dark:bg-[#0B0B12]">
            
            <div className="logo-container">
                <img 
                    className="logo w-28 h-auto object-contain transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(239,68,68,0.7)]" 
                    src={LOGO_URL} 
                    alt="Logo"
                />
            </div>
            
            <div className="headerlist-container flex items-center">
                <ul className="header-list flex items-center p-5 m-7">
                    
                    <li className="px-4 py-2 font-semibold text-[#542900] dark:text-[#E5E7EB] transition-colors duration-300 hover:text-[#7C3AED] dark:hover:text-[#DC2626]">
                        Online Status: {OnlineStatus ? "🟢" : "🔴"}
                    </li>

                    <li>
                        <button
                             type="button"
                                onClick={() => setIsDarkMode(!isDarkMode)}
                                 aria-label="Toggle dark mode"
                                    aria-pressed={isDarkMode}
                                    className={`relative h-7 w-12 rounded-full transition-colors duration-300 ${
                              isDarkMode ? "bg-[#DC2626]" : "bg-[#CBD5E1]"
        }`}
    >
        <span
            className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-md transition-all duration-300 ${
                isDarkMode ? "left-6" : "left-1"
            }`}
        />
    </button>
                    </li>

                    <li className="px-4 py-2 font-semibold text-[#542900] dark:text-[#E5E7EB] transition-colors duration-300 hover:text-[#7C3AED] dark:hover:text-[#DC2626]">
                        <Link to="/" className="flex items-center gap-2">
                            <House size={18}/>
                            <span>Home</span>
                        </Link>
                    </li>

                    <li className="px-4 py-2 font-semibold text-[#542900] dark:text-[#E5E7EB] transition-colors duration-300 hover:text-[#7C3AED] dark:hover:text-[#DC2626]">
                        <Link to="/About" className="flex items-center gap-2">
                        <Info size={18}/>
                            <span>About us</span>
                        </Link>
                    </li>

                    <li className="px-4 py-2 font-semibold text-[#542900] dark:text-[#E5E7EB] transition-colors duration-300 hover:text-[#7C3AED] dark:hover:text-[#DC2626]">
                        <Link to="/contact" className="flex items-center gap-2">
                        <Mail size={18}/>
                            <span>Contact</span>
                        </Link>
                    </li>

                    <li className="px-4 py-2 font-semibold text-[#542900] dark:text-[#E5E7EB] transition-colors duration-300 hover:text-[#7C3AED] dark:hover:text-[#DC2626]">
                        <Link to="/grocery" className="flex items-center gap-2">
                            <ShoppingBag size={18}/>
                            <span>Grocery</span>
                        </Link>
                    </li>

                    <li className="px-4 py-2 font-semibold text-[#542900] dark:text-[#E5E7EB] transition-colors duration-300 hover:text-[#7C3AED] dark:hover:text-[#DC2626]">

                        Profile
                    </li>

                    <li className="px-4 py-2 font-semibold text-[#542900] dark:text-[#E5E7EB] transition-colors duration-300 hover:text-[#7C3AED] dark:hover:text-[#DC2626]">
                        Cart
                    </li>

                    <li className="px-4 py-2 font-semibold text-[#542900] dark:text-[#E5E7EB] transition-colors duration-300 hover:text-[#7C3AED] dark:hover:text-[#DC2626]">
                        Order History
                    </li>

                    <button 
                        className="ml-3 cursor-pointer rounded-full border-2 border-[#6D28D9] bg-transparent px-5 py-2 font-bold capitalize text-[#6D28D9] transition-all duration-300 hover:bg-[#6D28D9] hover hover:shadow-[0_0_12px_rgba(109,40,217,0.5)] dark:border-[#DC2626] dark:text-[#F87171] dark:hover:bg-[#DC2626] dark:hover dark:hover:shadow-[0_0_12px_rgba(220,38,38,0.6)]"
                        onClick={() => {
                            setBtnNameReact(BtnNameReact === "login" ? "logout" : "login");
                        }}
                    >
                        {BtnNameReact}
                    </button>
                     <li className="px-4 py-2 font-semibold text-[#542900] dark:text-[#E5E7EB] transition-colors duration-300 hover:text-[#7C3AED] dark:hover:text-[#DC2626]">
                        user:{loggedInUser}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;