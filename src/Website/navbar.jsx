import React from 'react';
import './navbar.css'; // Import your CSS file for styling

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo-container">
                <a href="/" className="navbar-brand">
                    <img src="https://wassets.hscicdn.com/static/images/logo.png" alt="ESPNcricinfo" className="logo" width="138" height="21" />
                </a>
            </div>
            <div className="nav-links">
                <a href="/live-cricket-score" className="nav-item">Live Scores</a>
                <a href="/cricket-fixtures" className="nav-item">Series</a>
                <a href="/team" className="nav-item">Teams</a>
                <a href="/cricket-news" className="nav-item">News</a>
                <a href="/cricket-features" className="nav-item">Features</a>
                <a href="/cricket-videos/" className="nav-item">Videos</a>
                <a href="https://www.espncricinfo.com/records" className="nav-item">Stats</a>
                <a href="https://www.espncricinfo.com/series/icc-men-s-t20-world-cup-2024-1411166" className="nav-item">T20 World Cup 2024</a>
            </div>
            <div className="other-links">
                <div className="nav-item">Edition IN</div>
                <div className="nav-item"><i className="icon-dark_mode-filled"></i></div>
                <div className="nav-item"><i className="icon-notifications-filled"></i></div>
                <div className="nav-item"><i className="icon-translate"></i></div>
                <div className="nav-item"><i className="icon-apps-filled"></i></div>
                <div className="nav-item"><i className="icon-search-outlined"></i></div>
            </div>
        </div>
    );
}

export default Navbar;
