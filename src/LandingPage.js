import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="landing-header">
                <img src="/logo.jpg" alt="Logo" className="landing-logo" />
                <div className="header-text">
                    <h1>Escuela de español</h1>
                </div>
                <nav className="landing-nav">
                    <button>Home</button>
                    <button>Register</button>
                    <button>About</button>
                    <button>Contacts</button>
                </nav>
            </header>

            <div className="content-section">
                <img src="/sample-image.jpg" alt="Sample" className="header-image" />
                <div className="register-button-container">
                    <button className="register-button">Register</button>
                </div>
            </div>

            <section className="landing-main">
                {/* <p>Discover the amazing features of our app.</p> */}
            </section>

            <footer className="landing-footer">
                <p>&copy; 2023 My App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
