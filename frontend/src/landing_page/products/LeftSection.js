import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row fs-4">
        <div className="col-6 p-5 ">
          <img src={imageURL} />
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p className="mt-5">{productDescription}</p>
          <div className="mt-3">
            <a
              href={tryDemo}
              style={{ textDecoration: "none" }}
              className="me-5"
            >
              {" "}
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              {" "}
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay} className="me-5">
              <img src="media\images\googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media\images\appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
