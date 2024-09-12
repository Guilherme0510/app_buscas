import { Banner, Search, Box } from "./components";
import BackgroundImage from "./backgroundImage/backgroundImage";


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