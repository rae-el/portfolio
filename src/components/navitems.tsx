
import { FC } from 'react'
import '../stylesheets/navitems.css'
import { Link, NavLink } from 'react-router-dom';

type Props = {
    nav: boolean;
}
const NavItems: FC<Props> = ({nav}) => {
    const navLinkActive = ({ isActive }: { isActive: boolean }): string => {
        return (
          isActive ? "active" : ""
        )
      };

    return (
      <div className={!nav ? 'navitems' : 'navitems show'}>
                <ul>
                    <li><NavLink to="/work" className={navLinkActive}>Work</NavLink></li>
                    <li><NavLink to="/about" className={navLinkActive}>About</NavLink></li>
                    <li><Link to="mailto:rachelizawhite@gmail.com">Connect</Link></li>
                </ul>
            </div>
    )
  }
  
  export default NavItems