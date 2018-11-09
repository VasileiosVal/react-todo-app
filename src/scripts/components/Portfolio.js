import React from 'react'
import {Link} from 'react-router-dom'
import { Footer } from './Footer';

export class Portfolio extends React.Component {
    render(){
        let one = 1
        let two = 2
        return (
            <div>
            <h2>Portfolio page</h2>
            <p><Link to={`/portfolio/${one}`}>Page 1</Link><Link to={'/portfolio/' + two}>Page 2</Link></p>
            </div>
        );
    }
}