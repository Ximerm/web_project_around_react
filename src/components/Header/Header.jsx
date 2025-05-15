import logo from "../../images/Header/LogoHeader.svg";
import headerLine from "../../images/Header/Line.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo Around The U.S." />
      <img className="header__line" src={headerLine} alt="línea header" />
    </header>
  );
}
