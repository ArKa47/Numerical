import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/home'
import Bisec from '../pages/root of equation/bisec'
import Falsi from '../pages/root of equation/falsi'
import Onepoint from '../pages/root of equation/Onepoint'
import Secant from '../pages/root of equation/Secant'
import Newthon from '../pages/root of equation/Newthon'
import crammer from '../pages/matrix/crammer'
import guass from '../pages/matrix/guass_eliminate'
import gauss_jordan from '../pages/matrix/gauss_jordan'
import ludecom from '../pages/matrix/lu_decomposition'
import API from '../pages/API_check'
import swag from '../pages/swag'
import Newton_i from '../pages/Interpolation/newton_interpolation'
import lagrange from '../pages/Interpolation/Lagrange_interpolation'
import spline from '../pages/Interpolation/spline_interpolation'
import test from '../pages/Interpolation/test'

export default () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Bisec" component={Bisec}/>
        <Route path="/Falsi" component={Falsi}/>
        <Route path="/Secant" component={Secant}/>
        <Route path="/Newthon" component={Newthon}/>
        <Route path="/Onepoint" component={Onepoint}/>
        <Route path="/crammer" component={crammer}/>
        <Route path="/guass" component={guass}/>
        <Route path="/gauss_jordan" component={gauss_jordan}/>
        <Route path="/lu_decomposition" component={ludecom}/>
        <Route path="/Api" component={API}/>
        <Route path="/swag" component={swag}/>
        <Route path="/Newton_Inter" component={Newton_i}/>
        <Route path="/lagrange_Inter" component={lagrange}/>
        <Route path="/spline_Inter" component={spline}/>
        <Route path="/TEST" component={test}/>
        <Route component={Home} />
    </Switch>
)