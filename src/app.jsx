import React from 'react';
import { render } from 'react-dom';
import Nav from './nav.jsx';

import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.min.js';

class App extends React.Component {
    render() {
        return <Nav />
    }
}

render(<App/>, document.getElementById('app'));
