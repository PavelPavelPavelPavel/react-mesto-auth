
import Logo from "../images/logo.svg";
import { Link } from "react-router-dom"; 
import { useLocation } from "react-router-dom";



function Header({linkText, toLink, userEmail}) {
  const location = useLocation();

 
  return (
    <header className="header">
      <img src={Logo} alt="Место" className="header__logo" />
      <div className="header__wrapper">
      <p className="header__email">{userEmail}</p>
      <Link to={toLink} className="button-return   button-return_place_header">{linkText}</Link>
      </div>
    </header>
  );
}

export default Header;
