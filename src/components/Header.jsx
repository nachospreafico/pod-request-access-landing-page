import Logo from "./../assets/desktop/logo.svg";
import "./styles/Header.css";

const Header = () => {
  return (
    <header>
      <img src={Logo} className="logo" alt="Pod logo"></img>
    </header>
  );
};

export default Header;
