import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav>
                <div className='header'>
                    <div >
                    <Link to="/" >LAQuizzz</Link>
                    </div>
                    <div>
                        <Link to="/">Topics</Link>
                        <Link to="/statistics">Statistics</Link>
                        <Link to="/blog">Blog</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;