import Navbar from "../../components/navbar/Navbar";
import SlideShow from "../../components/slideShow/slideShow";
import ListHouse from "../../components/house/listHouse";


export default function Home() {
    return (
        <div>
            <Navbar />
            <SlideShow/>
            <ListHouse/>
        </div>
    )
}