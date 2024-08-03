import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import aaimaa from './img/aaimaa.jpg'
import first from './img/firstdg.jpg'
import second from './img/seconddg.jpg'
import img from "./img/dharmguru.jpg";

const Dharamguru = () => {
  const options = {
    items: 3, 
    loop: true,
    margin: 0, 
    nav: false,
    dots: true,
  };
  return (
    <div
      className="Parent_section layout_padding"
      style={{ marginTop: "60px" }}
    >
      <div className="container">
        <div className="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="client_section_2">
                <div
                  className="client_main"
                  style={{ backgroundColor: "black"}}
                >
                  <div className="client_left">
                    <div className="client_img">
                      <img src={img} alt="" />
                      <h3 className="name_text">दीवान साहब श्री माधव सिंह जी</h3>
                    </div>
                  </div>
                  <div className="client_right profilebox">
                    
                    <p className="dolor_text" style={{ color: "#dbd1da" }}>
                    <strong>जन्म : सम्वत् 1530</strong>
                     <p>
                     <strong>विवाह : सम्वत् 1542</strong>
                     </p>
                     <p>
                     <strong>पाट : सम्वत् 1557</strong>
                     </p>
                     <p>
                     <strong>स्वगर्वास : सम्वत् 1612</strong>
                     </p>
                     <p>
                     <strong>माघ सुद बीज पोह सुद बीज</strong>
                     </p>
                    </p>
                    <div style={{ width: "400px" }}>
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
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dharamguru;
