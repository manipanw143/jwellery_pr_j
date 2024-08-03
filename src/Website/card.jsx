import React from 'react';
import './ca.css'; // Import your CSS file

const PromotedSparklesComponent = () => {
    return (
        <div className="promoted-sparkles-container">
            <div className="thumbnail-container">
                <div className="thumbnail-hover-container">
                    <div className="thumbnail-deep-container">
                        <img className="thumbnail-img" src="https://lh6.googleusercontent.com/proxy/IEu0f6qnqBANzKkhxjn-CWyZT36n99exclJ8dW5uTMyj5CB1isa6LeIsBFlxUi14LR7Q3EGLIYUg07PNeFNVs63YFaQ3NIJDla1J78sN-yq1PMOoxAeWZZulhbWzau47CnY" alt="Thumbnail" />
                        <div className="media-badge-search"></div>
                    </div>
                    <div className="media-hover-overlay">
                        <button className="apply-now-button">Apply now</button>
                    </div>
                </div>
            </div>
            <div className="sparkles-body-container">
                <div className="sparkles-body">
                    <h3 className="title">Deploy Complex ML Models</h3>
                    <div className="description">
                        Join the IISc AIML Ops certification to design AI/ML models from scoping to deployment.
                    </div>
                    <div className="website-text-container">
                        <div className="ad-badge">Sponsored</div>
                        <div className="website-text">IISc Bangalore</div>
                    </div>
                </div>
                <div className="menu"></div>
            </div>
        </div>
    );
}

export default PromotedSparklesComponent;
