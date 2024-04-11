import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layouts/layout";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element = {<Layout>HOME PAGE</Layout>} /> // This is the home page in the place of chldren
            <Route path="/user-profile" element = {<span>USER PROFILE PAGE</span>} />
            <Route path="*" element = {<Navigate to = "/" />} />
          

        </Routes>

    );
};

export default AppRoutes;