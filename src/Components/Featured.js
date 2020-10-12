import React from "react";

const Featured = () => {
  return (
    <div>
      <section className="feature_part pt-4">
        <div className="container-fluid p-lg-0 overflow-hidden">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-4 col-sm-6">
              <div className="single_feature_post_text">
                <img src="img/feature_1.png" alt="#" />
                <div className="hover_text">
                  <a href="single-product.html" className="btn_2">
                    shop for male
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_feature_post_text">
                <img src="img/feature_2.png" alt="#" />
                <div className="hover_text">
                  <a href="single-product.html" className="btn_2">
                    shop for male
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="single_feature_post_text">
                <img src="img/feature_3.png" alt="#" />
                <div className="hover_text">
                  <a href="single-product.html" className="btn_2">
                    shop for male
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
