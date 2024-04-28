import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
    const { logout } = useAuth0();
    return (
        <>
         <Link to="/user-profie"
         className="flex bg-white items-center font-bold  hover:text-yellow-500" to="/about">
            User Profile
          </Link>
          <Button onClick={() => logout()}
          className="flex items-center px-3 font-bol hover:bg-blue-500">
            Logout
          </Button>
        </>
        
    )
}

export default MobileNavLinks;