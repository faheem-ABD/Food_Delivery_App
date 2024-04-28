import { Link } from "react-router-dom"
import MobileNav from "./MobileNav";

const Header = () => {
  return(
    <div className="border-b-2 border-b-yellow-500 py-6">
        <div className="container mx-auto flex justify-between items-center"></div>
        <Link
            to="/"
            className="text-4xl font-bold tracking-tight text-yellow-500">
            Eatholm.com
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
    </div>
  );
};

export default Header;