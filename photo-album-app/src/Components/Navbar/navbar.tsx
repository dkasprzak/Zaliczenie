import { FC } from "react";
import { 
    Nav,
    NavMenu,
    NavLink
} from './navbar-elements';


export const Navbar : FC = props => {
    return(
        <Nav>
            <NavMenu>
                <NavLink to ="/">Home</NavLink>
                <NavLink to ="/Posts">Posts</NavLink>
                <NavLink to ="/Users">Users</NavLink>
            </NavMenu>
        </Nav>
    );
};

export default Navbar;