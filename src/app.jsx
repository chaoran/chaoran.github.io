import React from 'react';
import { render } from 'react-dom';
import _ from 'lodash';
import Nav from './nav.jsx';

import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.min.js';

class Link {
    constructor(text) {
        this.text = text;
        this.id = _.camelCase(text);
    }
}

const links = [ new Link('About Me') ];

class App extends React.Component {
    constructor() {
        super();
        this.state = { active: null };
        this.setActive = (link) => {
            this.setState({ active: link });
        };
    }

    render() {
        return <Nav
            links={ links } active={ this.state.active }
            onClick={ this.setActive }
        />
    }
}

render(<App/>, document.getElementById('app'));
