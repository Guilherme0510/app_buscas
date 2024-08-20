import { Banner, Search, States } from "./components";
import BackgroundImage from "./backgroundImage/backgroundImage";


export const Home = () => { 

    return(
        <div>
            <BackgroundImage />
            <Banner />
            <Search />
            <States />
            
        </div>
    )
}