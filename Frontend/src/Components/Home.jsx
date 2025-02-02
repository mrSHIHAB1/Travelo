import { Outlet } from "react-router-dom";
import Nabbar from "./Nabbar";
import Fotter from "./Fotter";

const Home = () => {
    return (
        <div className="container mx-auto ">
            <Nabbar></Nabbar>
            <Outlet></Outlet>
            
            <Fotter ></Fotter>
            
        </div>
    );
};

export default Home;