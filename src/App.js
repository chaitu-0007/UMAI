import react ,{ useEffect,useState}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaunrantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import { lazy,Suspense } from "react";
import Shimmer from "./components/Shimmer";



const Grocery = lazy(()=>import("./components/Grocery"));

//App Layout
const AppLayout = () =>{
    const [isDarkMode ,setIsDarkMode]=useState(()=>{
        return localStorage.getItem("darkmode")==="true";
    });


    useEffect(()=>{
        localStorage.setItem("darkmode",isDarkMode);
    },[isDarkMode]);
    return (
        <div className={`app ${isDarkMode ? "dark" : ""}`}>
            <Header 
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            />
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
              path:"/",
              element:<Body /> , 
            },
            {
               path:"/About",
               element:<About/>,
            },
            {
               path:"/Contact",
               element:<Contact/>,
            },
            {
               path:"/grocery",
               element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>,
            },
            {
                path:"/restaurants/:resid",
                element:<RestaunrantMenu/>,
            },
        ],
        errorElement:<Error/>
    },
]);




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);