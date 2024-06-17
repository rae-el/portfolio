import {useState} from 'react';
import { MouseEvent } from 'react';
import icon from '../assets/images/png/logo-water-R.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/navbar.css'
import NavItems from './navitems';
import { Link } from 'react-router-dom';

function Navbar() {
    const [nav, setNav] = useState(false);
    const toggleNav = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setNav(!nav);
    };
    

    return (
      <nav className="nav-primary">
        <div className="content-container">
            <div className="nav-home">
                <Link to="/" className="nav-logo" title="Home">
                    <img src={icon} width='50'/>
                </Link>
                <h4 className="nav-title"></h4>
            </div>
            <div className="nav-pages">
                <button
                    className="nav-icon"
                    type="button"
                    aria-controls='navbarSupportedContent'
                    onClick={toggleNav}
                >
                    {!nav ? <FontAwesomeIcon icon={faBars} title="Navigation menu"/> : <FontAwesomeIcon icon={faXmark} />}
                </button>
                <NavItems nav={nav}/>
            </div>
            </div>
      </nav>
    )
  }
  
  export default Navbar