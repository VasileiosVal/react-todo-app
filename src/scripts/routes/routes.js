import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Header} from '../components/Header'
import {Footer} from '../components/Footer'
import Home from '../components/Home'
import {Portfolio} from '../components/Portfolio'
import {PortfolioItem} from '../components/PortfolioItem'
import {Help} from '../components/Help'
import {NotFound} from '../components/NotFound'
import DataCreate from '../components/DataCreate'
import DataEdit from '../components/DataEdit'



export class AppRouter extends React.Component {
    render(){
        return (
            <Router>
            <div>
            <Header /><hr/>
            <Switch>
            <Route path='/' component={Home} exact={true}/>
            <Route path='/portfolio' component={Portfolio} exact={true}/>
            <Route path='/portfolio/:id' component={PortfolioItem}/>
            <Route path='/help' component={Help}/>
            <Route path='/create' component={DataCreate}/>
            <Route path='/edit/:id' component={DataEdit}/>
            <Route component={NotFound}/>
            </Switch><hr/>
            <Footer />
            </div>
            </Router>
        );
    }
}