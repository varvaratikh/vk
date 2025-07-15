import {UserItems} from "./UserItems";
import {Menu} from "./Menu";
import {User} from "./User";

export const Sidebar = () => {
    return(
        <div>
            <User />
            <UserItems />
            <Menu />
        </div>
    )
}