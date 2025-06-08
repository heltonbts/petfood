import "./styles.css";

export const Places = () => {
  return (
    <li className="places d-flex align-items-start mb-3">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVzcc036XRmOP3HcN3sXuC2mBQcCzWWTCPjw&s"
        className="img-fluid rounded"
        alt="PetLove"
        style={{ width: "80px", height: "80px", objectFit: "cover" }}
      />

      <div className="ml-3 ms-2">
        <h6 className="mb-1">
          <b>PetLove</b>
        </h6>

        <div className="petshop-infos d-flex flex-wrap align-items-center mb-1">
          <span className="mdi mdi-star text-warning mr-1"></span>
          <span className="mr-3">
            <b>2,8</b>
          </span>

          <span className="mdi mdi-cash mr-1"></span>
          <span className="mr-3">$$$</span>

          <span className="mdi mdi-crosshairs-gps mr-1"></span>
          <span>2,8km</span>
        </div>

        <span className="badge badge-success">Frete Grátis</span>
      </div>
    </li>
  );
};
