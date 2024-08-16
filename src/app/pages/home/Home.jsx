import React from "react";
import { SiteNav, SiteFooter } from "../../shared/components";
import { Banner, Search, States } from "./components";

export const Home = () => { 

    return(
        <div>
            <SiteNav />
            <Banner />
            <Search />
            <States />
            <SiteFooter />
        </div>
    )
}