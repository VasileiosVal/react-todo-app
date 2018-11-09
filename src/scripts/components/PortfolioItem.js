import React from 'react'
import {Link} from 'react-router-dom'

export class PortfolioItem extends React.Component {
    render(){
        return (
            <div>
            <h2>Portfolio item page</h2>
            <p>You chose the item with id: {this.props.match.params.id}</p>
            <Link to='/portfolio'>Go back</Link>
            </div>
        );
    }
}