import React from 'react';
import {NavLink} from 'react-router-dom';

export class Header extends React.Component {
    render(){
        return (
            <div>
            <h3>Welcome</h3>
            <p>
            <NavLink to='/' activeClassName='active' exact={true}>Home   </NavLink>
            <NavLink to='/portfolio' activeClassName='active' exact={true}>Portfolio   </NavLink>
            <NavLink to='/help' activeClassName='active'>Help   </NavLink>
            <NavLink to='/create' activeClassName='active'>Create       </NavLink>
            </p>
            </div>
        );
    }
}