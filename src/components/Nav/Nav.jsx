import nav from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={nav.nav}>
      <div className={nav.item}>
        <a href="#" className={nav.nav__link}>Profile</a>
      </div>
      <div className={nav.item}>
        <a href="#" className={nav.nav__link}>Messages</a>
      </div>
      <div className={nav.item}>
        <a href="#" className={nav.nav__link}>News</a>
      </div>
      <div className={nav.item}>
        <a href="#" className={nav.nav__link}>Music</a>
      </div>
      <div className={nav.item}>
        <a href="#" className={nav.nav__link}>Settings</a>
      </div>
    </nav>
  );
};

export default Nav;