import LogoWhite from "../../assets/logo-white.png";
import Logo from "../../assets/logo-green.png";
import { Link, useLocation } from "react-router-dom";

import "./styles.css";

export const Header = ({ whiteVersion, hasSidebar }) => {
  const OpenSide = () => {
    const event = new CustomEvent("openCart");
    window.dispatchEvent(event);
  };

  const location = useLocation();
  const isSignupPage = location.pathname === "/cadastro";

  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center">
        {isSignupPage ? (
          <img src={whiteVersion ? LogoWhite : Logo} className="img-fluid" />
        ) : (
          <Link to="/">
            <img src={whiteVersion ? LogoWhite : Logo} className="img-fluid" />
          </Link>
        )}
      </header>
      {!hasSidebar && (
        <button
          className="btn btn-secondary cart-button"
          onClick={() => OpenSide()}
        >
          <span className="mdi mdi-cart-variant"></span>2 Itens
        </button>
      )}
    </div>
  );
};
