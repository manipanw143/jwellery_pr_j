import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img from './img/aaimaa.jpg';

const DemoCarousel = () => {
    return (
        <Carousel
            showArrows={true}
            showThumbs={false}
            infiniteLoop={true}
            centerMode={false}
            showStatus={false}
            dynamicHeight={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        style={{ left: '10px', zIndex: 1 }}
                    >
                        &lt;
                    </button>
                )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                    <button
                        type="button"
                        onClick={onClickHandler}
                        title={label}
                        style={{ right: '10px', zIndex: 1 }}
                    >
                        &gt;
                    </button>
                )
            }
            renderIndicator={(onClickHandler, isSelected, index, label) => {
                if (isSelected) {
                    return (
                        <li
                            style={{ background: '#000', width: '8px', height: '8px', borderRadius: '50%', display: 'inline-block', margin: '0 4px' }}
                            aria-label={`Selected: ${label} ${index + 1}`}
                            title={`Selected: ${label} ${index + 1}`}
                        />
                    );
                }
                return (
                    <li
                        style={{ background: '#fff', width: '8px', height: '8px', borderRadius: '50%', display: 'inline-block', margin: '0 4px' }}
                        onClick={onClickHandler}
                        onKeyDown={onClickHandler}
                        value={index}
                        key={index}
                        role="button"
                        tabIndex={0}
                        title={`${label} ${index + 1}`}
                        aria-label={`${label} ${index + 1}`}
                    />
                );
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
                <img src={img} alt="Legend 1" style={{ width: "60px", height: "60px" }} />
                <img src={img} alt="Legend 2" style={{ width: "60px", height: "60px" }} />
                <img src={img} alt="Legend 3" style={{ width: "60px", height: "60px" }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
                <img src={img} alt="Legend 4" style={{ width: "60px", height: "60px" }} />
                <img src={img} alt="Legend 5" style={{ width: "60px", height: "60px" }} />
                <img src={img} alt="Legend 6" style={{ width: "60px", height: "60px" }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
                <img src={img} alt="Legend 7" style={{ width: "60px", height: "60px" }} />
                <img src={img} alt="Legend 8" style={{ width: "60px", height: "60px" }} />
                <img src={img} alt="Legend 9" style={{ width: "60px", height: "60px" }} />
            </div>
        </Carousel>
    );
};

export default DemoCarousel;
