import React from 'react';
import {Link} from 'react-router-dom';

export const NotFound = () => {
    return (
        <div><h2>404 Not found</h2> <p><Link to='/'>Go home</Link></p></div>
    );
}
