import React, { Component } from 'react'
import logo from '../pictures/kmutnb.png'
import {Bar, Line} from 'react-chartjs-2'

class home extends Component {
  something = () =>{
    document.getElementById("pop").innerHTML = "Apple" ;
  }
  render (){
    return (
        <div className="App">
            <section class="hero is-info">
              <div className="container">
                <div className="chart-container">
                    <Line
                      data={{
                        labels: [1,2,3,4,5,6],
                        datasets: [{
                          label: 'Graph',
                          data: [12, 19, 3, 5, 2, 3],
                          borderColor:'rgba(250, 250, 250, 1)',
                          backgroundColor:'rgba(0, 0, 0, 0)'
                        }]
                      }}
                      options={{ maintainAspectRatio: false }}
                    />
                </div>
                <br></br>
                <br></br>
                <h1 className="title is-1" id="pop" onClick={this.something}>NUMERICAL WEB PAGE</h1>
                <br></br>
                <h2 className="page-title">PRESENT SWK</h2>
                <p className="button button-large is-primary"><a href="https://google.com/" target="_blank">START</a></p>
              </div>
            </section>
          </div>
      );
  }
}

export default home
