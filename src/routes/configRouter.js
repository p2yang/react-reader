import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Home from '../components/Home'
import About from '../components/About'

export default () => {
    return (
        <Router history={browserHistory}>
            <Route path='/' component={Home} />
            <Route path='/about' component={About} />
        </Router>
    )
}