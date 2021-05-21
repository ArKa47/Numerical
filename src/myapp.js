import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Routing from './route/route'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="my-app">
        <nav
          className="navbar is-primary"
          role="navigation"
          aria-label="main navigation"
        >
          
          <div className="container">
            <div className="navbar-start">
              <a href="https://kmutnb.ac.th/?lang=en" className="navbar-item" target="_blank">
                <span><i className="fas fa-graduation-cap"></i></span> <span className="title is-4"><h5 className="white">KMUTNB</h5></span>
              </a>
            </div>
          <div class="navbar-end">
                <Link to="/" className="navbar-item">
                <span class="icon">
                  <i class="fas fa-home"></i>
                </span>
                <span>Home</span>
                </Link>
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    Root of equation
                  </a>
                  <div class="navbar-dropdown">
                    <Link to="/Bisec" class="navbar-item">
                      <p className="has-text-dark">Bisection</p>
                    </Link>
                    <Link to="Falsi" class="navbar-item">
                      <p className="has-text-dark">False position</p>
                    </Link>
                    <Link to="Newthon" class="navbar-item">
                      <p className="has-text-dark">Newthon Rhapson</p>
                    </Link>
                    <Link to="Secant" class="navbar-item">
                      <p className="has-text-dark">Secant</p>
                    </Link>
                    <Link to="Onepoint" class="navbar-item">
                      <p className="has-text-dark">One point Iteration</p>
                    </Link>
                  </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    Matrix
                  </a>
                  <div class="navbar-dropdown">
                    <Link to="/crammer" class="navbar-item">
                      <p className="has-text-dark">Crammer</p>
                    </Link>
                    <Link to="/guass" class="navbar-item">
                      <p className="has-text-dark">Gauss Elimination</p>
                    </Link>
                    <Link to="/gauss_jordan" class="navbar-item">
                      <p className="has-text-dark">Gauss Jordan</p>
                    </Link>
                    <Link to="/lu_decomposition" class="navbar-item">
                      <p className="has-text-dark">Lu decomposition</p>
                    </Link>
                  </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    Interpolation
                  </a>
                  <div class="navbar-dropdown">
                    <Link to="/Newton_Inter" class="navbar-item">
                      <p className="has-text-dark">Newton Interpolation</p>
                    </Link>
                    <Link to="/lagrange_Inter" class="navbar-item">
                      <p className="has-text-dark">Lagrange Interpolation</p>
                    </Link>
                    <Link to="/spline_Inter" class="navbar-item">
                      <p className="has-text-dark">Spline Interpolation</p>
                    </Link>
                    <Link to="/TEST" class="navbar-item">
                      <p className="has-text-dark">TEST</p>
                    </Link>
                  </div>
                </div>
                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link">
                    Api controll
                  </a>
                  <div class="navbar-dropdown">
                    <Link to="/Api" class="navbar-item">
                      <p className="has-text-dark">API</p>
                    </Link>
                    <Link to="/swag" class="navbar-item">
                      <p className="has-text-dark">swagger</p>
                    </Link>
                  </div>
                </div>
            </div>
            <a 
              className="navbar-item"
              href="https://github.com/ArKa47"
              target="_blank"
            >
              <i className="fab fa-github"></i> My github 
            </a>
          </div>
        </nav>
        <Routing></Routing>
        <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
          <div className="container">
            <div className="navbar-end">
              <span className="navbar-item">
                <i className="fas fa-user"></i> <p>Name : Aphisit Setang</p>
              </span>
              <span className="navbar-item">
                <p>Student ID : 6104062630310</p>
              </span>
            </div>
          </div>
        </nav>
        <nav class="navbar is-primary">
          <div className="container">
            <div className="navbar-end">
              <span className="navbar-item">
              <i className="fas fa-user-tie"></i> PRESENT : SWK
              </span>
              <span className="navbar-item">
                <p>Subject : NUMERICAL</p>
              </span>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
export default App