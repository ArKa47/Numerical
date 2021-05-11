import {React , useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import newthon from '../../pictures/newthon.png';
import functionPlot from "function-plot";
import addelement from '../../fumction/addelement';
import resetelement from '../../fumction/resetElement';
import { abs, parse, typeOf } from 'mathjs';
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
      derivative: {
        fn: '2 * x',
        x0: 2
      }
    },
    {
      points: [
        [0, 0],
      ],
      fnType: 'points',
      graphType: 'scatter',
      color: 'blue'
    },
    {

    }
  ],
  annotations: [
  {
    x: "-1" ,
    text: "-1"
  }]
};
let fx, inix;
function plotUPdate()
{
        fx = document.getElementById("equation").value;
        inix = parseFloat(document.getElementById("initial_x").value);
        const scopex = {
          x: inix
        }
        let finix = math.evaluate(fx, scopex);
        let drifinix = math.derivative(fx, 'x').toString();
        let drifinixE = math.evaluate(drifinix, scopex);

        let numDrifinix = parseFloat(drifinixE);
        let numInix = parseFloat(inix);
        let numFinix = parseFloat(finix);
        let newX=numInix-(numFinix/numDrifinix);
        //document.getElementById("cheese").innerHTML=drifinixE

        plot.title = document.getElementById("equation").value;
        plot.data[0]={
          fn: document.getElementById("equation").value, color: '#ff9735',
          derivative: {
            fn: drifinix,
            x0: parseFloat(inix)
          }
        }
        plot.data[1]={
          points: [
            [inix, finix],
          ],
          fnType: 'points',
          graphType: 'scatter',
          color: 'blue'
        }
        plot.data[2]={
          points: [
            [newX, 0],
          ],
          fnType: 'points',
          graphType: 'scatter',
          color: 'red'
        }
        plot.annotations[0]=
        {
            x: document.getElementById("initial_x").value,
            text: "x = "+document.getElementById("initial_x").value
        }
}
var myinter
//set bool_graph_exist
function newton_interval (fx, x, xnew, range)
{
    bool_graph_exist = true;
    var frequent = parseFloat(document.getElementById("time").value)*1000;
    myinter = setInterval( () => {
      try{
        newton();
      }
      catch(e)
      {
        document.getElementById("cheese").innerHTML="Error"
        clearInterval(myinter);
      }
    },frequent)
    function plotiter(x, fx, xnew, drifinix)
    {
      /* Focus
      plot.yAxis= { 
        label: 'Y - axis',
        domain: [-4, 4] 
       }
       plot.xAxis= { 
        label: 'X - axis',
        domain: [x-4,x+4 ] 
       }
       */
       plot.data[0]={
        fn: document.getElementById("equation").value, color: '#ff9735',
        derivative: {
          fn: drifinix,
          x0: x
        }
      }
      plot.data[1]={
        points: [
          [x, fx],
        ],
        fnType: 'points',
        graphType: 'scatter',
        color: 'blue'
      }
      plot.data[2]={
        points: [
          [xnew, 0],
        ],
        fnType: 'points',
        graphType: 'scatter',
        color: 'red'
      }
      plot.annotations[0]=
      {
          x: x,
          text: "x = "+x
      }
    }
    function newton()
    {
      const scopex = {
        x: x
      }
      let finix = math.evaluate(fx, scopex);
      let drifinix = math.derivative(fx, 'x').toString();
      let drifinixE = math.evaluate(drifinix, scopex);

      let numDrifinix = parseFloat(drifinixE);
      let numInix = parseFloat(x);
      let numFinix = parseFloat(finix);
      let newX=numInix-(numFinix/numDrifinix);
      xnew=Fixed(newX, range);
      addelement(x,"pinitial_x");
      addelement(xnew, "pnew_x");
      plotiter(numInix, numFinix, xnew, drifinix)
      functionPlot(plot)
      if(numInix==xnew) 
      {
        document.getElementById("cheese").innerHTML = "Finish"
        clearInterval(myinter);
        document.getElementById("iteration").innerHTML= "Start iteration"  
        bool_graph_exist=false;
      }
      x = xnew;
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
        document.getElementById("cheese").innerHTML="Function"
        reset();
      }
      catch(err)
      {
        document.getElementById("cheese").innerHTML="can't combine equation"
      }
    }
    
  }
  
  const iteration_call =() =>
  {
    if(document.getElementById("equation").value == "" || document.getElementById("initial_x").value == "" || document.getElementById("time").value == "" || document.getElementById("range").value == "") 
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
        resetelement("pinitial_x")
        resetelement("pnew_x")
        newton_interval(fx, inix, 0, parseFloat(document.getElementById("range").value));
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
        <h1 class="title is-1">Newthon Rhapson</h1>
        <h2 class="subtitle"> bracketing bethod</h2>
        <br></br>
        <img src={newthon} alt="newthon" />
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
              <div className="my-SubcontainerM">
                <input class="input is-primary" type="text" placeholder="Initial x" id="initial_x"></input>
              </div>
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
                      <div class="column-half" >
                        <h2>Initial X</h2>
                        <div id="pinitial_x">
                        </div>
                      </div>
                      <div class="column-half" >
                        <h2>new x</h2>
                        <div id="pnew_x">
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
