import {React , useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import '../../App.css';
import falsi from '../../pictures/falsepos.jpg';
import functionPlot from "function-plot";
import addelement from '../../fumction/addelement';
import resetelement from '../../fumction/resetElement';
import Fixed from '../../fumction/Fixed';
import { abs } from 'mathjs';


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
let fx,xl,xr,x1;
function plotUPdate()
{
        fx = document.getElementById("equation").value;
        xl = parseFloat(document.getElementById("xl").value);
        xr = parseFloat(document.getElementById("xr").value);
        const scopel = {
          x: xl
        }
        const scoper = {
          x: xr
        }
        let fxl = math.evaluate(fx, scopel);
        let fxr = math.evaluate(fx, scoper);
        
        //falsi
        x1 = ((xl*fxr)-(xr*fxl))/(fxr-fxl);
        //

        plot.title = document.getElementById("equation").value;
        plot.data[0]={
          fn: document.getElementById("equation").value, color: '#ff9735'
        }
        plot.data[1] ={
          points: [
            [xl, fxl],
            [xr, fxr],
          ],
          fnType: 'points',
          graphType: 'polyline',
          color: '#00FF00'//lime
      }
        plot.data[2]={
          points: [
            [x1, 0],
          ],
          fnType: 'points',
          graphType: 'scatter',
          color: 'red'
        }
        plot.data[3]={
          points: [
            [xl, fxl],
            [xr, fxr]
          ],
          fnType: 'points',
          graphType: 'scatter',
          color: 'blue'
        }
        plot.annotations[0]=
        {
            x: document.getElementById("xl").value,
            text: "xl = "+document.getElementById("xl").value
        }
        plot.annotations[1] =
        {
          x: document.getElementById("xr").value,
          text: "xr = "+document.getElementById("xr").value
        }
}
var myinter
//set bool_graph_exist
function falsi_interval (fx, xl, xr, x1old)
{
    bool_graph_exist = true;
    var frequent = parseFloat(document.getElementById("time").value)*1000;
    var epsilon = parseFloat(document.getElementById("epsilon").value);
    myinter = setInterval( () => {
      try{
        falsi();
      }
      catch(e)
      {
        clearInterval(myinter);
      }
    },frequent)
    function plotiter(fxl, fxr, x1, xl, xr)
    {
      //focus
      /*
      plot.yAxis= { 
        label: 'Y - axis',
        domain: [xl-5, xr+5] 
       }
       plot.xAxis= { 
        label: 'X - axis',
        domain: [xl-1, xr+1] 
       }
       */
      plot.data[1] ={
        points: [
          [xl, fxl],
          [xr, fxr],
        ],
        fnType: 'points',
        graphType: 'polyline',
        color: '#00FF00'//lime
      }
      plot.data[2]={
        points: [
          [x1, 0],
          [xl, fxl],
          [xr, fxr]
        ],
        fnType: 'points',
        graphType: 'scatter',
        color: 'red'//hot pink
      }
      plot.data[3]={
        points: [
          [xl, fxl],
          [xr, fxr]
        ],
        fnType: 'points',
        graphType: 'scatter',
        color: 'blue'
      }
      plot.annotations[0]=
      {
          x: xl,
          text: "xl = "+xl
      }
      plot.annotations[1] =
      {
        x: xr,
        text: "xr = "+xr
      }
    }
    function falsi()
    {
      const scopel = {
        x: xl
      }
      const scoper = {
        x: xr
      }
      let fxl = math.evaluate(fx, scopel);
      let fxr = math.evaluate(fx, scoper);
      let x1 = ((xl*fxr)-(xr*fxl))/(fxr-fxl);
      const scope1 = {
        x: x1
      }
      let fx1 = math.evaluate(fx, scope1);
      let criterion = abs((x1 - x1old)/x1);//**check */
      let fx1fxr = fx1
      let choose = Fixed(fx1 * fxr);
      let abfx1 = abs(fx1)
      let final = Fixed(abfx1,6)
      addelement(xl, "pxl")
      addelement(xr, "pxr")
      addelement(x1, "px1")
      addelement(criterion, "pnum")///
      plotiter(fxl, fxr, x1, xl, xr)
      functionPlot(plot)
      if(criterion <= epsilon ) 
      {
        document.getElementById("cheese").innerHTML = "Finish"
        clearInterval(myinter);
        document.getElementById("iteration").innerHTML= "Start iteration"  
        bool_graph_exist=false;
      }
      else{
        if(choose <= 0)
        {
          xl = x1
          x1old = x1;
        }
        else{
          xr = x1
          x1old = x1;
        }
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
        reset();
        resetelement("pxl")
        resetelement("pxr")
        resetelement("px1")
        resetelement("pnum")
        falsi_interval(fx, xl, xr, 0);
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
        <h1 class="title is-1">False Position </h1>
        <h2 class="subtitle"> bracketing bethod</h2>
        <br></br>
        <img src={falsi} alt="falsepos" />
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
                      <div class="column" id="parent_px1">
                        <h2>X1</h2>
                        <div id="px1">
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
