import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row fs-4 ">
        <div className="col-5 p-5 mt-5 ">
          <h1>{productName}</h1>
          <p className="mt-5">{productDescription}</p>
          <a
            href={learnMore}
            style={{ textDecoration: "none" }}
            className="mt-3"
          >
            {" "}
            Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6  ">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
