import ListHost from "../admin/list/ListHost";
import ListUser from "../admin/list/ListUser";

export default function Admin(){
    return(
        <div>
        <ListHost></ListHost>
        <ListUser></ListUser>
        </div>
    )
}