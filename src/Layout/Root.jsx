import { Outlet } from "react-router-dom";
import Navbars from "../Components/Header/Navbar";
import { createContext, useState } from "react";

export const SearchContext = createContext()
const Root = () => {
    const [searchValue, setSearchValue] = useState()
    return (
        <>


        <div >

            <Navbars/>
            <Outlet context={[searchValue, setSearchValue]}/>

        </div>

        </>
    );
};

export default Root;