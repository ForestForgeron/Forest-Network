import { NavLink } from 'react-router-dom';
import nav from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={nav.nav}>
      <div className={nav.nav__item}>
        <NavLink
          to="/profile"
          className={nav.nav__link}
          activeClassName={nav.nav__link_active}
        >
          Profile
        </NavLink>
      </div>
      <div className={nav.nav__item}>
        <NavLink to="/dialogues" className={nav.nav__link} activeClassName={nav.nav__link_active}>Messages</NavLink>
      </div>
      <div className={nav.nav__item}>
        <NavLink to="/news" className={nav.nav__link} activeClassName={nav.nav__link_active}>News</NavLink>
      </div>
      <div className={nav.nav__item}>
        <NavLink to="/music" className={nav.nav__link} activeClassName={nav.nav__link_active}>Music</NavLink>
      </div>
      <div className={nav.nav__item}>
        <NavLink to="/settings" className={nav.nav__link} activeClassName={nav.nav__link_active}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Nav;