import { NavLink } from "react-router-dom";

const ACTIVE_STYLES = {
    fontWeight: "bold",
    color: "red",
};

const Nav = ({dogs}) => {
    return(
        <ul>
            {dogs.map(dog => <li key={dog.src}><NavLink to={`/dogs/${dog.name.toLowerCase()}`} activeStyle = {ACTIVE_STYLES}>{dog.name}</NavLink></li>)}
        </ul>
    );
}

export default Nav;