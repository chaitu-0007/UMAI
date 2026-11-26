import { createContext } from "react";

const UserContext=createContext({
    loggedInUser : "Cefault User",
});

export default UserContext;