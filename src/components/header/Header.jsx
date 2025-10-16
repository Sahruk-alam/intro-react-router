import React from 'react';
import { NavLink} from 'react-router';
import '../NavCss/NavBar.css'
const Header = () => {
    return (
        <div>
          <h1>This is a header</h1>
          <nav >
            <NavLink to="/">Home</NavLink>
            <NavLink to="/laptop">Laptop</NavLink>
            <NavLink to="/mobiles">Mobile</NavLink>
            <NavLink to="/User">Users</NavLink>
            <NavLink to="/Users2">Users2</NavLink>
          </nav>
        </div>
    );
};

export default Header;