import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import aaimaa from './img/aaimaa.jpg'
import first from './img/firstdg.jpg'
import second from './img/seconddg.jpg'
const CustomerSection = () => {
  const options = {
    items: 3, 
    loop: true,
    margin: 0, 
    nav: false,
    dots: true,
  };

  return (
    <section className="section-news section-t8">
      <div className="container">
       
        <OwlCarousel className="owl-theme" {...options}>
          <div className="carousel-item-c">
          <div className="card-box-b card-shadow news-box">
              <div className="img-box-b">
                <img src={first} alt="" className="img-b img-fluid" />
              </div>
              <div className="card-overlay">
                <div className="card-header-b">
                  <div className="card-category-b">
                    {/* <a href="#" className="category-b">Park</a> */}
                  </div>
                  <div className="card-title-b">
                    <h2 className="title-2">
                      {/* <a href="blog-single.html">Park is coming <br /> new</a> */}
                    </h2>
                  </div>
                  <div className="card-date">
                    <span className="date-b">प्रथम दीवान श्री गोयन्ददासजी</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item-c">
          <div className="card-box-b card-shadow news-box">
              <div className="img-box-b">
                <img src={second} alt="" className="img-b img-fluid" />
              </div>
              <div className="card-overlay">
                <div className="card-header-b">
                  <div className="card-category-b">
                    {/* <a href="#" className="category-b">Park</a> */}
                  </div>
                  <div className="card-title-b">
                    <h2 className="title-2">
                      {/* <a href="blog-single.html">Park is coming <br /> new</a> */}
                    </h2>
                  </div>
                  <div className="card-date">
                    <span className="date-b">द्वितीय दीवान श्री लखधीर सिंह जी</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item-c">
            <div className="card-box-b card-shadow news-box">
              <div className="img-box-b">
                <img src={aaimaa} alt="" className="img-b img-fluid" />
              </div>
              <div className="card-overlay">
                <div className="card-header-b">
                  <div className="card-category-b">
                    {/* <a href="#" className="category-b">Park</a> */}
                  </div>
                  <div className="card-title-b">
                    <h2 className="title-2">
                      {/* <a href="blog-single.html">Park is coming <br /> new</a> */}
                    </h2>
                  </div>
                  <div className="card-date">
                    <span className="date-b">जय श्री आई जी</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item-c">
          <div className="card-box-b card-shadow news-box">
              <div className="img-box-b">
                <img src={aaimaa} alt="" className="img-b img-fluid" />
              </div>
              <div className="card-overlay">
                <div className="card-header-b">
                  <div className="card-category-b">
                    {/* <a href="#" className="category-b">Park</a> */}
                  </div>
                  <div className="card-title-b">
                    <h2 className="title-2">
                      {/* <a href="blog-single.html">Park is coming <br /> new</a> */}
                    </h2>
                  </div>
                  <div className="card-date">
                    <span className="date-b">जय श्री आई जी</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </section>
  );
};

export default CustomerSection;