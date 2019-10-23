import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {

    const style={
        color : 'white'
    }

  return (
    <nav>
        <Link to='/'  style={style}>
        <h3>Logo</h3>
        </Link>
        <ul className="nav-links">
            <Link to='/about'  style={style}>
            <li>About</li>
            </Link>
            <Link to='/fortnite' style={style}>
            <li>Fortnite</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;