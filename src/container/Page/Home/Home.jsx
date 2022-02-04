import React, { Component } from "react";
import Features from "../../../component/Features/Features";
import ServicesSection from "../../../component/ServicesSection/ServicesSection";
import RecentWorks from "../../../component/RecentWorks/RecentWorks";
// eslint-disable-next-line
//eslint-disable no-unused-vars

class Home extends Component {
  render() {
    return (
      <div className="body homepage">
        <div id="main-slider" className="no-margin">
          <div className="carousel slide">
            <ol className="carousel-indicators">
              <li
                data-target="#main-slider"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#main-slider" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
              <div className="item active slider-img-1">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="carousel-content">
                        <h1 className="animation animated-item-1">
                          En kaliteli ürünler
                        </h1>
                        <div className="animation animated-item-2">
                          Every new computer that’s brought home from the store
                          has an operating system installed onto it.
                        </div>
                        <a
                          className="btn-slide animation animated-item-3"
                          href="#f"
                        >
                          Daha Fazla
                        </a>
                        <a
                          className="btn-slide white animation animated-item-3"
                          href="#f"
                        >
                          Ürünler
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item slider-img-2">
                <div className="container">
                  <div className="row">
                    <div className="col-md-7">
                      <div className="carousel-content">
                        <h1 className="animation animated-item-1">
                          En Kaliteli motor camları
                        </h1>
                        <div className="animation animated-item-2">
                          Every new computer that’s brought home from the store
                          has an operating system installed onto it.
                        </div>
                        <a
                          className="btn-slide white animation animated-item-3"
                          href="#f"
                        >
                          Daha Fazla
                        </a>
                        <a
                          className="btn-slide animation animated-item-3"
                          href="#f"
                        >
                          Ürünler
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            className="prev hidden-xs hidden-sm"
            href="#main-slider"
            data-slide="prev"
          >
            <i className="fa fa-chevron-left"></i>
          </a>
          <a
            className="next hidden-xs hidden-sm"
            href="#main-slider"
            data-slide="next"
          >
            <i className="fa fa-chevron-right"></i>
          </a>
        </div>

        <section id="feature">
          <div className="container">
            <div className="center fadeInDown">
              <h2>Neden bizi tercih etmelisiniz?</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad
                minim veniam
              </p>
            </div>

            <div className="row">
              <Features
                icon="fa fa-rocket"
                title="Hızlı Üretim"
                desc="Having a baby can be a nerve wracking experience for new"
              />
              <Features
                icon="fa fa-check"
                title="Hızlı Teslimat"
                desc="If you are looking for a new way to promote your business that"
              />
              <Features
                icon="fa fa-bullhorn"
                title="Fiyat/Performans"
                desc="Okay, you’ve decided you want to make money with Affiliate"
              />
              <Features
                icon="fa fa-arrows"
                title="Tamamen Özel"
                desc="A Pocket PC is a handheld computer, which features many"
              />
            </div>
          </div>
        </section>

        <section id="recent-works">
          <div className="container">
            <div className="center fadeInDown">
              <h2>Deneyimimiz</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad
                minim veniam
              </p>
            </div>

            <div className="row">
              <RecentWorks img="https://demo.themeum.com/html/corlate/images/portfolio/item-1.png" />
              <RecentWorks img="https://demo.themeum.com/html/corlate/images/portfolio/item-2.png" />
              <RecentWorks img="https://demo.themeum.com/html/corlate/images/portfolio/item-3.png" />
              <RecentWorks img="https://demo.themeum.com/html/corlate/images/portfolio/item-4.png" />
              <RecentWorks img="https://demo.themeum.com/html/corlate/images/portfolio/item-5.png" />
              <RecentWorks img="https://demo.themeum.com/html/corlate/images/portfolio/item-6.png" />
            </div>

            <div className="clearfix text-center">
              <a href="#f" className="btn btn-primary btn-top">
                Ürünler
              </a>
            </div>
          </div>
        </section>

        <section id="services" className="service-item">
          <div className="container">
            <div className="center fadeInDown">
              <h2>Hizmetlerimiz</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad
                minim veniam
              </p>
            </div>

            <div className="row">
              <ServicesSection
                title="Pleksi Motor Camı"
                desc="Hydroderm is the highly desired anti-aging cream on"
                img="https://demo.themeum.com/html/corlate/images/services/ux.svg"
              />
              <ServicesSection
                title="Pleksi Aksesuar "
                desc="Hydroderm is the highly desired anti-aging cream on"
                img="https://demo.themeum.com/html/corlate/images/services/web.svg"
              />
              <ServicesSection
                title="Motor Aksesuarları"
                desc="Hydroderm is the highly desired anti-aging cream on"
                img="https://demo.themeum.com/html/corlate/images/services/motion.svg"
              />

              <ServicesSection
                title="Aksesuar 4"
                desc="Hydroderm is the highly desired anti-aging cream on"
                img="https://demo.themeum.com/html/corlate/images/services/mobile-ui.svg"
              />
              <ServicesSection
                title="Aksesuar 5"
                desc="Hydroderm is the highly desired anti-aging cream on"
                img="https://demo.themeum.com/html/corlate/images/services/web-app.svg"
              />
              <ServicesSection
                title="Aksesuar 6"
                desc="Hydroderm is the highly desired anti-aging cream on"
                img="https://demo.themeum.com/html/corlate/images/services/mobile-ui.svg"
              />
            </div>
          </div>
        </section>

        <section id="partner">
          <div className="container">
            <div className="center fadeInDown">
              <h2>Referanslarımız</h2>
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut et dolore magna aliqua. Ut enim ad
                minim veniam
              </p>
            </div>

            <div className="partners">
              <ul>
                <li>
                  <a href="#f">
                    <img
                      className="img-responsive fadeInDown"
                      data-wow-duration="1000ms"
                      data-wow-delay="300ms"
                      src="https://demo.themeum.com/html/corlate/images/partners/brand-1.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#f">
                    <img
                      className="img-responsive fadeInDown"
                      data-wow-duration="1000ms"
                      data-wow-delay="600ms"
                      src="https://demo.themeum.com/html/corlate/images/partners/brand-2.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#f">
                    <img
                      className="img-responsive fadeInDown"
                      data-wow-duration="1000ms"
                      data-wow-delay="900ms"
                      src="https://demo.themeum.com/html/corlate/images/partners/brand-3.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#f">
                    <img
                      className="img-responsive fadeInDown"
                      data-wow-duration="1000ms"
                      data-wow-delay="1200ms"
                      src="https://demo.themeum.com/html/corlate/images/partners/brand-4.png"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="#f">
                    <img
                      className="img-responsive fadeInDown"
                      data-wow-duration="1000ms"
                      data-wow-delay="1500ms"
                      src="https://demo.themeum.com/html/corlate/images/partners/brand-5.png"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
