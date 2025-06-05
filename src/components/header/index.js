import LogoWhite from "../../assets/logo-white.png";
import Logo from "../../assets/logo-green.png";
import "./styles.css";

export const Header = ({ whiteVersion }) => {
  const OpenSide = () => {
    const event = new CustomEvent("openCart");
    window.dispatchEvent(event);
  };

  return (
    <div className="col-12">
      <header className="py-4 px-4 text-center">
        <img src={whiteVersion ? LogoWhite : Logo} className="img-fluid"></img>
      </header>
      <button
        className="btn btn-secondary cart-button"
        onClick={() => OpenSide()}
      >
        <span className="mdi mdi-cart-variant"></span>2 Itens
      </button>
    </div>
  );
};
