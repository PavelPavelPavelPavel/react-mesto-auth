import Logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={Logo} alt="Место" className="header__logo" />
      {/* <button type={button}>{}</button> */}
    </header>
  );
}

export default Header;
