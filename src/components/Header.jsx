import logo from "../assets/images/logo.svg";
import darkLogo from "../assets/images/dark-logo.svg";
import iconSun from "../assets/images/icon-sun.svg";
import iconMoon from "../assets/images/icon-moon.svg";

export default function Header({ handleClick }) {
  return (
    <header>
      <nav>
        <img src={logo} alt="dark-logo" className="logo light-logo" />
        <img src={darkLogo} alt="logo" className="logo dark-logo" />
        <button type="button" id="theme-switch-btn" onClick={() => handleClick()}>
          <img className="icon-moon" src={iconMoon} alt="moon" />
          <img className="icon-sun" src={iconSun} alt="sun" />
        </button>
      </nav>
    </header>
  );
}
