import React from "react";

function Hero() {
  return (
    <div className="container border-bottom">
      <div className="row text-center  mt-5 p-5 mb-5">
        <h1 className="mt-5">Zerodha Products</h1>
        <h3 className="mt-3 text-muted ">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-4 fs-4 mb-5">
          Check out our{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            investment offerings {"   "}{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
