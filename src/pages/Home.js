import NavBar from "../components/NavBar";
import Search from "../components/Search";
import { useState } from "react";

const Home = ()=>{

    return (
        <div>
            <NavBar />
            <div className="container m-5 p-5 shadow-lg">
                <Search />
            </div>
        </div>
    );
};

export default Home;