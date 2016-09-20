import React from 'react';
import _ from 'lodash';

class Nav extends React.Component {
    constructor() {
        super();
        this.clickHome = () => this.props.onClick(null);
    }

    render() {
        const links = this.props.links.map((link) => {
            const isActive = link == this.props.active ? 'active' : '';
            const click = () => { this.props.onClick(link); };
            return (
                <li key={ link.id } className={ isActive }>
                    <a href={ '#' + link.id } onClick={ click }>
                        { link.text }
                    </a>
                </li>
            );
        });
        return (
            <nav>
                <div className="container nav-wrapper">
                    <a
                        href="#"
                        className="brand-logo"
                        onClick={ this.clickHome }>
                        Chaoran Yang
                    </a>
                    <ul id="nav-mobile" className="right hide-on-small-only">
                        { links }
                    </ul>
                </div>
            </nav>
        );
    }
}

module.exports = Nav;
