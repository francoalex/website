import '../styles/Navbar.css'
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className='nav'>
            <ul className='nav-list'>
                <li className='nav-item'> <Link to="/">Home</Link> </li>
                <li className='nav-item'> <Link to="/about">About</Link> </li>
                <li className='nav-item'> <Link to="/projects">Projects</Link> </li>
            </ul>
        </div>
    );
}

export default Navbar;