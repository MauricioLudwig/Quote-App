import React from 'react';
import Spinner from 'react-spinkit';

const Loader = () => (
    <div className="loader">
        <Spinner
            name="pacman"
            fadeIn="none" />
    </div>
);

export default Loader;