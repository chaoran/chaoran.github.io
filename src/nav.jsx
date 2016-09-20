import React from 'react';

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <div className="container nav-wrapper">
                    <a href="#" className="brand-logo">Chaoran Yang</a>
                    <ul id="nav-mobile" className="right hide-on-small-only">
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

module.exports = Nav;
