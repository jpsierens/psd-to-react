import React, { PropTypes } from 'react';
import Header from '../header';
// import { Link } from 'react-router';

const App = ({ children }) =>
    <div>
        <Header />
        { children }
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
