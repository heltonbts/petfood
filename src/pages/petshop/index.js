import { Header } from "../../components/header/index.js";
import { ProductCard } from "../../components/product/card/index.js";
import "./styles.css";

export const Petshop = () => {
  return (
    <div className="h-100">
      <Header />

      <div className="container">
        <div className="row">
          <div className="col-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVzcc036XRmOP3HcN3sXuC2mBQcCzWWTCPjw&s"
              className="img-fluid petshop-image"
              alt="PetLove"
            />
            <b>PetLove</b>
            <div className="petshop-infos">
              <span className="mdi mdi-star"></span>
              <span>
                <b>2,8</b>
              </span>
              <span className="mdi mdi-cash"></span>
              <span>$$$</span>
              <span className="mdi mdi-crosshairs-gps"></span>
              <span>2,8km</span>
            </div>
            <label className="badge badge-primary">Frete Grátis</label>
          </div>
          <div className="col-10">
            <h5>Produtos</h5>
            <div className="row">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
                <ProductCard />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
