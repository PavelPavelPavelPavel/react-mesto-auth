
import Logo from "../images/logo.svg";
import { Link, useLocation } from "react-router-dom"; 
import { useState, useEffect } from 'react';


function Header({email}) {
  
const location = useLocation();
const [linkText, setLinkText] = useState('');
const [toLink, setTolink] = useState('');
const [userEmail, setUserEmail] = useState('');

useEffect(() => {
  if(location.pathname === '/sign-in') {
    setTolink('/sign-up');
    setLinkText('Регистрация');
  } else  if(location.pathname === '/sign-up') {
    setTolink('/sign-in');
    setLinkText('Войти');
  } else  if(location.pathname === '/') {
    setTolink('');
    setLinkText('Выйти');
    setUserEmail(email)
  } 
}, [location.pathname])



  return (
    <header className="header">
      <img src={Logo} alt="Место" className="header__logo" />
      <div className="header__wrapper">
      <p className="header__email">{userEmail}</p>
      <Link to={toLink} className="button-return button-return_place_header">{linkText}</Link>
      </div>
    </header>
  );
}

export default Header;
