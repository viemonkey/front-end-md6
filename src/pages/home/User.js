import Navbar from "../../components/navbar/Navbar";
import SlideShow from "../../components/slideShow/slideShow";
import ListHouse from "../../components/house/listHouse";
import FunctionBar from "../../components/functionBar/FunctionBar";


export default function User() {
    return (
        <div>

            <Navbar />
            <h1>THIS IS PAGE FOR USER</h1>
            <FunctionBar/>
            <SlideShow/>
            <ListHouse/>
        </div>
    )
}