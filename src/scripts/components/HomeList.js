import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const HomeList = ({id, dispatch, description, amount}) => {
        return (
            <div>
            <h4>{description} - amount: {amount}   <Link to={`/edit/${id}`}>Edit</Link></h4>
            
            </div>
        );
    }



export default connect()(HomeList) 



