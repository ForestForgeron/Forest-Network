import header from './Header.module.css';

const Header = () => {
  return (
    <header className={header.header}>
      <img
        src="https://www.buythelogo.com/wp-content/uploads/2019/03/Leaf-tree-abstract-forest-logo-vector.jpg"
        alt="logo"
        className={header.header__logo}
      />
    </header>
  );
};
export default Header;