import React from 'react';
import { Carousel } from 'antd';
import OwlCarousel from 'react-owl-carousel';
const contentStyle = {
  margin: 0,
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Teams = () => {

 return(
  <>
    <Carousel arrows infinite={false}>
      <div>
        <h3 style={contentStyle}>
          
      {/* <OwlCarousel {...options} className='owl-theme team-carousel position-relative p-5 py-sm-5' loop margin={10} nav>  */}
      
      <img className="img" src="https://picsum.photos/200" alt="" />
      <img className="img" src="https://picsum.photos/200" alt="" />
      <img className="img" src="https://picsum.photos/200" alt="" />
      <img className="img" src="https://picsum.photos/200" alt="" />
      {/* </OwlCarousel> */}
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
  </>
);
}
export default Teams;