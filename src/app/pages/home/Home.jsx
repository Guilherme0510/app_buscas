import BackgroundImage from "./backgroundImage/backgroundImage";
import { Banner, Box, Search } from "./components/index";


export const Home = () => { 

    return(
        <div>
            <BackgroundImage />
            <Banner />
            <Search />
            <Box />
        </div>
    )
}