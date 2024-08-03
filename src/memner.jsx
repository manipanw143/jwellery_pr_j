import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import aaimaa from './img/aaimaa.jpg';

const Member = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        padding: '30px',
        fontFamily: "'Roboto', sans-serif",
    };

    const colStyle = {
        maxWidth: '600px',
        padding: '15px',
    };

    const memberStyle = {
        display: 'flex',
        alignItems: 'flex-start',
        background: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        padding: '20px',
    };

    const picStyle = {
        flexShrink: 0,
        marginRight: '20px',
    };

    const imgStyle = {
        borderRadius: '50%',
        width: '100px',
        height: '100px',
        objectFit: 'cover',
    };

    const memberInfoStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const nameStyle = {
        margin: 0,
        fontSize: '20px',
        fontWeight: 'bold',
    };

    const titleStyle = {
        fontSize: '16px',
        color: 'gray',
    };

    const descriptionStyle = {
        margin: '10px 0',
        fontSize: '14px',
        color: '#555',
    };

    const socialStyle = {
        display: 'flex',
        marginTop: '10px',
    };

    const socialLinkStyle = {
        marginRight: '10px',
        color: '#555',
        fontSize: '18px',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
    };

    const socialLinkHoverStyle = {
        color: '#007bff',
    };

    return (
        <div style={containerStyle}>
            <div style={colStyle} data-aos="zoom-in" data-aos-delay="100">
                <div style={memberStyle}>
                    <div style={picStyle}>
                        <img
                            src={aaimaa}
                            style={imgStyle}
                            alt="Harish Muleva"
                        />
                    </div>
                    <div style={memberInfoStyle}>
                        <h4 style={nameStyle}>Harish Muleva</h4>
                        <span style={titleStyle}>Chief Executive Officer</span>
                        <p style={descriptionStyle}>
                            23yrs of industry experience in multiple domains, tools and technologies
                        </p>
                        <div style={socialStyle}>
                            <a href="https://twitter.com/hcmuleva" style={{ ...socialLinkStyle, ...socialLinkHoverStyle }}>
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://www.facebook.com/hcmuleva" style={{ ...socialLinkStyle, ...socialLinkHoverStyle }}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://www.instagram.com/hcmuleva" style={{ ...socialLinkStyle, ...socialLinkHoverStyle }}>
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/in/harishmuleva/" style={{ ...socialLinkStyle, ...socialLinkHoverStyle }}>
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Member;
