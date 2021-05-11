import {React , useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import bisection from '../../pictures/bisection.jpg';
import functionPlot from "function-plot";
import addelement from '../../fumction/addelement';
import resetelement from '../../fumction/resetElement';


const math = require('mathjs');

let width = 700;
let height = 500;

let bool_grid=false;
let bool_graph_exist=false;

//const functionPlotplot = require("function-plot")
const plot = (gridC) => functionPlot({
  title: "Fn()="+document.getElementById("equation").value,
  target: "#popo",
  width,
  height,
  yAxis: { 
          label: 'Y - axis',
          domain: [-9, 9] 
         },
  xAxis: { 
          label: 'X - axis',
          domain: [-9, 9] 
         },
  grid: gridC,
  data: [
    {
      fn: document.getElementById("equation").value, color: '#ff9735'
    },
    {
      points: [
        [(parseFloat(document.getElementById("xl").value)+parseFloat(document.getElementById("xr").value))/2, 0],
      ],
      fnType: 'points',
      graphType: 'scatter',
      color: 'blue'
    }
  ],
  annotations: [{
  }, {
    x: document.getElementById("xl").value ,
    text: "xl = "+document.getElementById("xl").value
  }, {
    x: document.getElementById("xr").value,
    text: "xr = "+document.getElementById("xr").value
  }]
});
//
var myinter
function App() {

  const [pxl,setpxl] = useState([""])
  const [pxr,setpxr] = useState([""])
  const [pxm,setpxm] = useState([""])
  const [pnum,setpnum] = useState([""])
  //const [bool_grid,setbool_grid] = useState(false)

  const bisectionfn = (fn, xl, xr, xold, epsilon=0.0001) =>
  {
    bool_graph_exist=true;
    var frequent = parseFloat(document.getElementById("time").value)*1000;
    epsilon = parseFloat(document.getElementById("epsilon").value);
    myinter = setInterval( () => {
      try{
        bisec();
      }
      catch(e)
      {
        clearInterval(myinter);
      }
    },frequent)
    function  bisec () {
      let xm = (xl+xr)/2
      addelement(xm,"pxm")
      addelement(xr,"pxr")
      addelement(xl,"pxl")
      const scopem = {
        x: xm
      }
      const scoper = {
        x: xr
      }
      let fxm = math.evaluate(fn, scopem)
      let final = Math.abs((xm-xold)/xm)
      if(isNaN(final)) addelement(0,"pnum")
      else addelement(final,"pnum")
      if(final <= epsilon || isNaN(final))
      {
        document.getElementById("cheese").innerHTML= "Finish"
        document.getElementById("iteration").innerHTML= "Start iteration"
        clearInterval(myinter)
        bool_graph_exist=false;
      }
      let fxr = math.evaluate(fn, scoper)
      //Iteration plot
      const plotiter = (gridC) => functionPlot({
        title: "Fn()="+document.getElementById("equation").value,
        target: "#popo",
        width,
        height,
        yAxis: { 
                label: 'Y - axis',
                domain: [fxm-5, fxm+5] 
              },
        xAxis: { 
                label: 'X - axis',
                domain: [xl-0.25, xr+0.25] 
              },
        grid: gridC,
        data: [
          {
            fn: document.getElementById("equation").value, color: '#ff9735'
          },
          {
            points: [
              [xm, fxm],
            ],
            fnType: 'points',
            graphType: 'scatter',
            color: 'blue'
          }
        ],
        annotations: [{
        }, {
          x: xl ,
          text: "xl = "+xl
        }, {
          x: xr,
          text: "xr = "+xr
        }]
      });
      //
    plotiter(false);
    if(fxm*fxr <= 0)
      {
        xl=xm;
        xold=xm
      }

    else{
        xr=xm;
        xold=xm
    }
      /*
      if(fxm*fxr < 0) bisectionfn(fn, xm, xr, fxm, epsilon);
      else bisectionfn(fn, xl, xm, fxm, epsilon);
      */
    }
  }

  const reset = (gridC) =>
  {
        try {
          var myobj = document.getElementById("doll");
          myobj.remove();
        }
        catch(err) {
          ;
        }
        plot(gridC);
  }

  const grid_controll =() =>
  {
    if(document.getElementById("equation").value == "") 
    {
      document.getElementById("cheese").innerHTML = "fill all empty fields"
      return 0;
    }
    if(bool_grid==true)
    {
      bool_grid=false
      reset(bool_grid)
    }
    else
    {
      bool_grid=true;
      reset(bool_grid)
    }
  }

  const combine = () =>
  {
    if(document.getElementById("equation").value == "") 
    {
      document.getElementById("cheese").innerHTML = "fill all empty fields"
      return 0;
    }
    else
    {
      try{
        reset(bool_grid);
      }
      catch(err)
      {
        document.getElementById("cheese").innerHTML="can't combine equation"
      }
    }
    
  }
  
  const iteration_call =() =>
  {
    if(document.getElementById("equation").value == "" || document.getElementById("xl").value == "" || document.getElementById("xr").value == "" || document.getElementById("time").value == "" || document.getElementById("epsilon").value == "") 
    {
      document.getElementById("cheese").innerHTML = "fill all empty fields"
      return 0;
    }
    if(bool_graph_exist == true)
    {
      clearInterval(myinter);
      document.getElementById("cheese").innerHTML="function"
      document.getElementById("iteration").innerHTML="Start iteration"
      bool_graph_exist=false;
    }
    else{
      try{
        document.getElementById("itconfiq").innerHTML="Iteration confiq"
        document.getElementById("cheese").innerHTML="on iteration"
        document.getElementById("iteration").innerHTML="Cancel Iteration"
        reset(bool_grid);
        resetelement("pxl")
        resetelement("pxr")
        resetelement("pxm")
        resetelement("pnum")
        bisectionfn(document.getElementById("equation").value, parseFloat(document.getElementById("xl").value), parseFloat(document.getElementById("xr").value), 0, 0.0001)
      }
      catch(err)
      {
        clearInterval(myinter);
        document.getElementById("iteration").innerHTML="Start iteration"
        document.getElementById("cheese").innerHTML="can't combine"
        bool_graph_exist=false;
        document.getElementById("itconfiq").innerHTML="unknow graph"
      }
    }
  }

  return(
  <div className="App">
    <div className="container">
        <br></br>
        <h1 class="title is-1">Bisection</h1>
        <h2 class="subtitle"> bracketing bethod</h2>
        <br></br>
        <img src={bisection} alt="bisection" />
        <br></br>
        <div className="my-container">
            <div className="content">
                <span className="cute">
                    <p>Step</p>
                    <ul>
                        <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                        <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                        <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                        <li>Ut non enim metus.</li>
                    </ul>
                    <br></br>
                    <br></br>
                </span>
            </div>
        </div>
        <div className="sub_chart-container" id="popo"><span className="center">
           <h1 class="title is-1" id="doll">input first</h1></span>
           <span className="float-rigth"><button className="button is-primary" onClick={grid_controll} id="clic">Toggle grid</button></span>
        </div>
        <br></br>
        <button className="button is-primary" onClick={combine} id="clic">Plot a Graph</button>
        <br></br>
        <div className="my-container">
          <div className="content">
            <span className="cute-mid">
              <p id="cheese">Function</p>
              <input class="input is-primary" type="text" placeholder="function example x^4-13" id="equation"></input>
              <span className="my-SubcontainerL">
                <input class="input is-primary" type="text" placeholder="XL" id="xl"></input>
              </span>
              <span className="my-SubcontainerR">
                <input class="input is-primary" type="text" placeholder="XR" id="xr"></input>
              </span>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <p id="itconfiq">Iteration confiq</p>
              <span className="my-SubcontainerL">
                <input class="input is-info" type="text" placeholder="Interval time(sec)" id="time"></input>
              </span>
              <span className="my-SubcontainerR">
                <input class="input is-info" type="text" placeholder="Epsilon(error)" id="epsilon"></input>
              </span>
              <button className="button is-info" onClick={iteration_call} id="iteration">Start Iteration</button>
            </span>
          </div>
        </div>
        <div className="content">
          <div className="cute-mid">
              <div className="box">
                    Iteration
                    <div class="row">
                      <div class="column" id="parent_pxl">
                        <h2>XL</h2>
                        <div id="pxl">
                        </div>
                      </div>
                      <div class="column" id="parent_pxr">
                        <h2>XR</h2>
                        <div id="pxr">
                        </div>
                      </div>
                      <div class="column" id="parent_pxm">
                        <h2>XM</h2>
                        <div id="pxm">
                        </div>
                      </div>
                      <div class="column" id="parent_pnum">
                        <h2>NEW*OLD / NEW</h2>
                        <div id="pnum">
                        </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
        <br></br>
    </div>
  </div>
  )
}

export default App;
