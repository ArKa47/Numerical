import {React , useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import secant from '../../pictures/secant.png';
import functionPlot from "function-plot";
import addelement from '../../fumction/addelement';
import resetelement from '../../fumction/resetElement';
import { abs } from 'mathjs';
import Fixed from '../../fumction/Fixed';


const math = require('mathjs');

let width = 700;
let height = 500;

let bool_grid=false;
let bool_graph_exist=false;


//const functionPlotplot = require("function-plot")
const plot = {
  title: "",
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
  grid: bool_grid,
  data: [
    {
      fn: "x" , 
      secants: [
        { x0: 0, x1: 5 },
        ]
    },
    {
      points: [
        [0, 0],
      ],
      fnType: 'points',
      graphType: 'scatter',
      color: 'blue'
    }
  ],
  annotations: [
  {
    x: "-1" ,
    text: "-1"
  }, 
  {
    x: "1",
    text: "1"
  }]
};
let fx,x1,x2,xnew;
function plotUPdate()
{
        fx = document.getElementById("equation").value;
        x1 = parseFloat(document.getElementById("x1").value);
        x2 = parseFloat(document.getElementById("x2").value);
        const scope1 = {
          x: x1
        }
        const scope2 = {
          x: x2
        }
        let fx1 = math.evaluate(fx, scope1);
        let fx2 = math.evaluate(fx, scope2);
        //secant
        let vessel = (fx2-fx1)/(x2-x1)
        xnew = x2-(fx2/vessel);
        const scopenew = {
          x: xnew
        }
        let fxnew = math.evaluate(fx, scopenew);
        //

        plot.title = document.getElementById("equation").value;
        plot.data[0]={
          fn: document.getElementById("equation").value, color: '#ff9735',
          secants: [
            { x0: x1, x1: x2 ,color: '#00FF00'},
            ]
        }
        plot.data[1]={
          points: [
            [x1, fx1],
            [x2, fx2]
          ],
          fnType: 'points',
          graphType: 'scatter',
          color: 'blue'
        }
        plot.data[2]={
          points: [
            [xnew, 0],
            [xnew, fxnew]
          ],
          fnType: 'points',
          graphType: 'scatter',
          color: '#FF69B4'//hot pink
        }
        plot.annotations[0]=
        {
            x: x1,
            text: "x1 = "+document.getElementById("x1").value
        }
        plot.annotations[1] =
        {
          x: x2,
          text: "x2 = "+document.getElementById("x2").value
        }
}
var myinter
//set bool_graph_exist
function secant_interval (fx, x1, x2)
{
    bool_graph_exist = true;
    var frequent = parseFloat(document.getElementById("time").value)*1000;
    var range = parseFloat(document.getElementById("range").value);
    myinter = setInterval( () => {
      try{
        secant();
      }
      catch(e)
      {
        clearInterval(myinter);
      }
    },frequent)
    function plotiter(fx1, fx2, fxnew, xnew)
    {
       plot.data[0]={
        fn: document.getElementById("equation").value, color: '#ff9735',
        secants: [
          { x0: x1, x1: x2 ,color: '#00FF00'},
          ]
      }
      plot.data[1]={
        points: [
          [x1, fx1],
          [x2, fx2]
        ],
        fnType: 'points',
        graphType: 'scatter',
        color: 'blue'
      }
      plot.data[2]={
        points: [
          [xnew, 0]
          //[xnew, fxnew]
        ],
        fnType: 'points',
        graphType: 'scatter',
        color: '#FF69B4'//hot pink
      }
      plot.annotations[0]=
      {
          x: x1,
          text: "x1 = "+x1
      }
      plot.annotations[1] =
      {
        x: x2,
        text: "x2 = "+x2
      }
    }
    function secant()
    {
      const scope1 = {
        x: x1
      }
      const scope2 = {
        x: x2
      }
      let fx1 = math.evaluate(fx, scope1);
      let fx2 = math.evaluate(fx, scope2);
        //secant
        let vessel = (fx2-fx1)/(x2-x1)
        let xnew = x2-(fx2/vessel);
        const scopenew = {
          x: xnew
        }
        let fxnew = math.evaluate(fx, scopenew);
        //
      x1=Fixed(x1,range);
      x2=Fixed(x2,range);
      xnew=Fixed(xnew,range);
      plotiter(fx1, fx2, fxnew, xnew);
      functionPlot(plot);
      addelement(x1,"px1");
      addelement(x2,"px2");
      addelement(xnew,"pnum");
      if(x2==xnew) 
      {
        document.getElementById("cheese").innerHTML = "Finish"
        clearInterval(myinter);
        document.getElementById("iteration").innerHTML= "Start iteration"  
        bool_graph_exist=false;
      }
      else{
        x1=x2;
        x2=xnew;
      }
    }

}
//
function App() {

  const [pxl,setpxl] = useState([""])
  const [pxr,setpxr] = useState([""])
  const [pxm,setpxm] = useState([""])
  const [pnum,setpnum] = useState([""])
  //const [bool_grid,setbool_grid] = useState(false)
  const reset = () =>
  {
        try {
          var myobj = document.getElementById("doll");
          myobj.remove();
        }
        catch(err) {
          ;
        }
        plotUPdate();
        functionPlot(plot);
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
      plot.grid = false;
      functionPlot(plot);
    }
    else
    {
      bool_grid=true;
      plot.grid = true;
      functionPlot(plot);
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
        reset();
      }
      catch(err)
      {
        document.getElementById("cheese").innerHTML="can't combine equation"
        alert(err)
      }
    }
    
  }
  
  const iteration_call =() =>
  {
    if(document.getElementById("equation").value == "" || document.getElementById("x1").value == "" || document.getElementById("x2").value == "" || document.getElementById("time").value == "" || document.getElementById("range").value == "") 
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
        reset();
        resetelement("px1")
        resetelement("px2")
        resetelement("pnum")
        secant_interval(fx, x1, x2);
      }
      catch(err)
      {
        clearInterval(myinter);
        alert(err);
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
        <h1 class="title is-1">Secant</h1>
        <h2 class="subtitle"> bracketing bethod</h2>
        <br></br>
        <img src={secant} alt="secant" />
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
                <input class="input is-primary" type="text" placeholder="X1" id="x1"></input>
              </span>
              <span className="my-SubcontainerR">
                <input class="input is-primary" type="text" placeholder="X2" id="x2"></input>
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
                <input class="input is-info" type="text" placeholder="Range" id="range"></input>
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
                      <div class="column-third" id="parent_pxl">
                        <h2>X0</h2>
                        <div id="px1">
                        </div>
                      </div>
                      <div class="column-third" id="parent_pxr">
                        <h2>X1</h2>
                        <div id="px2">
                        </div>
                      </div>
                      <div class="column-third" id="parent_pnum">
                        <h2>Xnew</h2>
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
