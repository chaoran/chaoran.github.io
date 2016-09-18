import React from 'react';
import { render } from 'react-dom';

import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.min.js';

class App extends React.Component {
    render() {
        return <p> Hello World! </p>;
    }
}

render(<App/>, document.getElementById('app'));
