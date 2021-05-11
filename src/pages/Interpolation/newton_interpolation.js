import React, { useState } from 'react';
import newton_pic from '../../pictures/newton_i.png'
import prepare from '../../fumction/matrix_prepare'
import axios from 'axios';
import addinput from '../../fumction/addinput'
import reset from '../../fumction/resetElement'

var interpolatingPolynomial = require('interpolating-polynomial');
let matrix_exit=false;

function Newton_i ()
{
    const [count, setCount] = useState(0);
    const [ans, setAns] = useState(0);
    //const [create, setCreate] = useState([]);
    let create = [];
    let mat_id="mat";
    const test = (gate=true, api=false, n, mat=0) =>
    {
        reset("limit");
        if(matrix_exit)
        {
            matrix_exit=false;
            for(let i = 0; i < count; i++)
            {
                create.pop();
                create.pop();
                create.pop();
            }
        }
        if(gate)
        {
            matrix_exit=true;
            for(let i = 0; i < count; i++)
            {
                mat_id = "mat"+i+"0";
                create.push(<span><input className="my-input" id={mat_id} key={mat_id} ></input></span>)
                mat_id = "mat"+i+"1";
                create.push(<span><input className="my-input" id={mat_id} key={mat_id} ></input></span>)
                create.push(<br></br>)
            }
            console.log("??");       
        }
        else{
            setCount(0);
            matrix_exit=false;
        }
        return(create);
    }
    const delInput = () =>
    {
        test(false);
    }
    const strand = (e) =>
    {
        let n = parseInt(document.getElementById("n").value);
        setCount(0);
        setCount(n);
        test();
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
        if(matrix_exit)
        {
            matrix_exit=false;
            for(let i = 0; i < count; i++)
            {
                create.pop();
                create.pop();
                create.pop();
            }
            setCount(0);
        }
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
    }
    async function api_call ()
    {
        try{
            const data = await axios.get("https://my-json-server.typicode.com/ArKa47/api/newtonInter").then(response => response.data)
            let mat = data[0]["Array"];
            let n = data[0]["Array Size"];
            let x = data[0]["x"];
            console.log(mat);
            api_call_utill(n,mat,x);
        }catch(err){
            document.getElementById("pop").innerHTML=err;
        }
    }

    return(
        <div className="App">
            <br></br>
            <div className="container">
                <h1 className="title is-1" id="test">newton interpolation</h1>
                <h1 className="subtitle">interpolation</h1>
                <br></br>
                <img src={newton_pic} alt="newton"/>
                <div className="cute-mid">
                    <br></br>
                    <p>Formular is : Above ^ </p>
                </div>
                <br></br>
                <div className="my-SubcontainerM">
                    <input className="input is-warning" placeholder="X" id="x" ></input>
                </div>
                <div className="my-SubcontainerM">
                    <input className="input is-primary" placeholder="n (min = 4)" id="n" ></input>
                </div>
                <button className="button is-info" id="ok" onClick={strand}>ok</button>
                <span> </span><span className="button is-danger" onClick={api_call}>Get example</span>
                <br></br>
                <br></br>
                <div className="cute-mid" id="main">
                    {test()}
                    <div id="limit"></div>
                    <br></br>
                    <button className="button is-primary" onClick={cal}>Calculate</button>
                    <span> </span><span className="button is-warning" onClick={delInput}>Clear</span>
                </div>
                <br></br>
                <br></br>
                <div className="cute-mid">
                    <p id="ans"></p>
                </div>
                <br></br>
              <br></br>
            </div>
        </div>
    )
}

export default Newton_i;