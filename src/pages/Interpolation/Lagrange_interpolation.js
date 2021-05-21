import lagrange from '../../pictures/lagrange.png'
import React, { useState } from 'react';
import prepare from '../../fumction/matrix_prepare'
import axios from 'axios';
import addinput from '../../fumction/addinput'
import reset from '../../fumction/resetElement'
import functionPlot from "function-plot"
import data_defual from './grahp/grahp'
import plotPoint from '../../fumction/plotPoint'
import linear_call from '../../fumction/newton_linear'
import newton from '../../fumction/newmer_inter'
import quard from '../../fumction/quadratic'

var interpolatingPolynomial = require('interpolating-polynomial');
const math = require('mathjs');

var matrix_exit=false;
let toggle_grahp_exit=false;
var g_exit=false;
var isolate;
let arr_data=[];//Use to set all the data in the grahp
let xy_matrix;//store array from input
let n ;//store n value of table x,y length

function Newton_i ()
{
    let count=0;
    let shek=0;
    //const [create, setCreate] = useState([]);
    let create = [];
    let mat_id="mat";
    const test = (count) =>
    {
        if(count!=shek)
        {
            reset("limit");
            for(let i = 0; i<count ;i++)
            {
                mat_id = "mat"+i+"0";
                addinput("","limit", mat_id)
                mat_id = "mat"+i+"1";
                addinput("","limit", mat_id)
                var element = document.getElementById("limit");
                var dv = document.createElement("div")
                element.appendChild(dv);
            }
        }
        shek=count
    }
    const delInput = () =>
    {
        document.getElementById("cal_option").hidden=true;
        document.getElementById("pp").hidden=true;
        document.getElementById("main").hidden=true;
        document.getElementById("doll").hidden=false;
        document.getElementById("results").hidden=true;
        test(false);
    }
    const strand = (e) =>
    {
        document.getElementById("main").hidden=false;
        document.getElementById("cal_option").hidden=true;
        let n = parseInt(document.getElementById("n").value);
        count=n;
        test(count);
    }
    const cal = () =>
    {
        let n = parseInt(document.getElementById("n").value);
        let str = "mat";
        let xy_matrix = prepare(n,str);
        console.log(xy_matrix);
        let x = parseFloat(document.getElementById("x").value);
        let f = interpolatingPolynomial(xy_matrix);
        let anspow2 = f(x);
        console.log(anspow2);
        document.getElementById("ans").innerHTML="f(x) = "+anspow2;
    }

    const api_call_utill = (n,mat,x) =>
    {
        reset("limit");
        shek=n;
        count=n;
        document.getElementById("n").value=n
        document.getElementById("x").value=x
        for(let i = 0; i<n ;i++)
        {
            mat_id = "mat"+i+"0";
            addinput(mat[i][0],"limit", mat_id)
            mat_id = "mat"+i+"1";
            addinput(mat[i][1],"limit", mat_id)
            var element = document.getElementById("limit");
            var dv = document.createElement("div")
            element.appendChild(dv);
        }
        document.getElementById("main").hidden=false;
    }
    async function api_call ()
    {
        try{
            const data = await axios.get("https://my-json-server.typicode.com/ArKa47/api/interpolation/newton_interpolation").then(response => response.data)
            let mat = data["Array"];
            let n = data["Array Size"];
            let x = data["x"];
            api_call_utill(n,mat,x);
        }catch(err){
            document.getElementById("pop").innerHTML=err;
        }
    }
    function submite()//you get metaix since submite is occur
    {
        g_exit=true;
        document.getElementById("pp").hidden=false;
        n = parseInt(document.getElementById("n").value);
        let str = "mat";
        xy_matrix = prepare(n,str);
        console.log(xy_matrix);
        let take = plotPoint(xy_matrix,arr_data,n)
        isolate = take[0];
        //console.log(take[0])
        arr_data = take[1];
        document.getElementById("cal_option").hidden=false;
        document.getElementById("doll").hidden=true;
        upd();
    }
    function tGrid()
    {
        if(g_exit)
        {
            if(isolate.grid==true)
            {
                //alert("true");
                isolate.grid=false;
            } 
            else{
                //alert("fasle");
                isolate.grid=true;
            }
            upd();
        }
    }
    function linear()
    {
        submite();
        let take = linear_call(xy_matrix,arr_data,n);
        isolate = take[0];
        arr_data = take[1];
        upd();
        ///
        let linear_arr = [];
        linear_arr[0] = xy_matrix[0];
        linear_arr[1] = xy_matrix[1];
        let equation = newton(linear_arr,linear_arr.length)
        let x = parseFloat(document.getElementById("x").value);
        const scopex = {
            x: x
          }
        let fx = math.evaluate(equation,scopex);
        //
        upResult(fx,equation,"Method Linear",x)
    }
    function quadratic()
    {
        submite();
        let take = quard(xy_matrix,arr_data,n);
        isolate = take[0];
        console.log(isolate)
        arr_data = take[1];
        console.log(arr_data);
        upd();
        //
        let linear_arr = [];
        linear_arr[0] = xy_matrix[0];
        linear_arr[1] = xy_matrix[1];
        linear_arr[2] = xy_matrix[2];
        let equation = newton(linear_arr,linear_arr.length)
        let x = parseFloat(document.getElementById("x").value);
        const scopex = {
            x: x
          }
        let fx = math.evaluate(equation,scopex);
        //
        upResult(fx,equation,"Method Quadratic",x)
    }
    function polynomial()
    {
        submite();
        let equation = newton(xy_matrix,n);
        arr_data.pop();
        arr_data.push({
            fn: equation,
            graphType: 'polyline',
            color: '#f4a460'//sand brown
        });
        isolate = {
            target: '#pp',
            title: 'Visualize',
            width: 700,
            height: 500,
            grid: true,
            data: arr_data
        }
        upd();
        //
        let x = parseFloat(document.getElementById("x").value);
        const scopex = {
            x: x
          }
        let fx = math.evaluate(equation,scopex);
        //
        upResult(fx,equation,"Method Polynomial",x)
    }
    function upd()
    {
        functionPlot(isolate);
    }
    function upResult(fx, equation, method, x)
    {
        document.getElementById("results").hidden=false;
        document.getElementById("predict_methodX").innerHTML=method+" ( x = "+x+" )";
        document.getElementById("predict_methodEquation").innerHTML=method;
        document.getElementById("predict_methodX_data").innerHTML="fx = "+fx;
        document.getElementById("predict_methodEquation_data").innerHTML=equation;
    }
    function final_method()
    {
        try{
            if(!toggle_grahp_exit)
            {
                toggle_grahp_exit=true;
                let equation = newton(xy_matrix,n);
                arr_data.pop();
                arr_data.push({
                    fn: equation,
                    graphType: 'polyline',
                    color: "#35ffab" //
                });
                isolate = {
                    target: '#pp',
                    title: 'Visualize',
                    width: 700,
                    height: 500,
                    grid: true,
                    data: arr_data
                }
                upd();
            }
            else{
                toggle_grahp_exit=false;
                arr_data.pop();
                arr_data.push({
                    fn: "0",
                    range: [100, 100],
                    graphType: 'polyline',
                    color: "black"
                });
                isolate = {
                    target: '#pp',
                    title: 'Visualize',
                    width: 700,
                    height: 500,
                    grid: true,
                    data: arr_data
                }
                upd();
            }
        }
        catch(e)
        {
            submite();
            alert("Input first")
        }
    }

    return(
        <div className="App">
            <br></br>
            <div className="container">
                <h1 className="title is-1" id="test">Lagrange interpolation</h1>
                <h1 className="subtitle">interpolation</h1>
                <br></br>
                <img src={lagrange} alt="lagrange"/>
                <div className="cute-mid">
                    <br></br>
                    <p>Formular is : Above ^ </p>
                </div>
                <br></br>
                <div className="cute-mid">
                    <div className="sub_chart-container">
                        <div className="float-rigth"><div className="button is-primary" onClick={tGrid}>Toggle Grid</div></div>
                        <div id="pp"></div>
                        <div className="center" id="doll">
                            <h1 class="title is-1">input first</h1>
                        </div>
                    </div>

                    <div className="my-SubcontainerM">
                        <br></br>
                        <div className="float-left"><div className="button is-primary" onClick={final_method}>Toggle Real Graph</div></div>
                        <br></br>
                        <p id="test">In put x to predict and number of n in x,y table</p>
                        <br></br>
                        <input className="input is-warning" placeholder="X" id="x" ></input>
                    </div>
                    <div className="my-SubcontainerM">
                        <input className="input is-primary" placeholder="table length (n)" id="n" ></input>
                    </div>
                    <button className="button is-info" id="ok" onClick={strand}>ok</button>
                    <span> </span><span className="button is-danger" onClick={api_call}>Get example</span>
                    <br></br>
                    <br></br>
                    <div className="cute-mid" id="main" hidden>
                        <div id="limit"></div>
                        <br></br>
                        <button className="button is-primary is-rounded" onClick={submite} id="submit">SUBMIT</button>
                        <span> </span>
                        <span className="button is-warning is-rounded" onClick={delInput} id="clear">Clear</span>
                        <br></br>
                        <br></br>
                        <div className="content" id="cal_option" hidden>
                            <div className="cute-mid">
                                <div className="my-container">
                                    <div className="box">
                                        <p>Calculate option</p>
                                        <div class="row">
                                            <div class="column-third" id="Linear">
                                                <button className="button is-primary is-outlined" onClick={linear}>Linear</button>
                                            </div>
                                            <div class="column-third" id="Quad">
                                                <button className="button is-primary is-outlined" onClick={quadratic}>Quadratic</button>
                                            </div>
                                            <div class="column-third" id="cubic">
                                                <button className="button is-primary is-outlined" onClick={polynomial}>Polynomial</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <div className="content" id="results" hidden>
                            <div className="cute-mid">
                                <div className="container">
                                    <div className="box">
                                        <p>results</p>
                                        <div class="row">
                                            <div class="column-half" >
                                                Predict X
                                                <p id="predict_methodX"></p>
                                                <p id="predict_methodX_data"></p>
                                            </div>
                                            <div class="column-half" >
                                                Predict equation
                                                <p id="predict_methodEquation"></p>
                                                <p id="predict_methodEquation_data"></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <br></br>
                <br></br>
                <br></br>
              <br></br>
            </div>
        </div>
    )
}

export default Newton_i;