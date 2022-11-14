import logoMesto from "../images/logo.svg";

function Header() {
  return (
    <header className="header page__header section">
      <img className="header__logo" alt="Логотип проекта Mesto" src={logoMesto} />
    </header>
  );
}

export default Header;
