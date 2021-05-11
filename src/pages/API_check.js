import React from 'react';
import axios from 'axios';
import addelement from '../fumction/addelement'
import reset from '../fumction/resetElement'
/*
var data = axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then(response =>{
        console.log(response.data);
    },err =>{
        console.log(err);
    })
    */
//document.getElementById("pop").innerHTML=data["title"];
let show = [] ;

const showTime =(data)=>
{
    reset("show");
    addelement("Function : "+data[0]["Function"],"show");
    addelement("xl : "+data[0]["xl"],"show");
    addelement("xr : "+data[0]["xr"],"show");
    addelement("interval : "+data[0]["interval"],"show");
    addelement("epsilon : "+data[0]["Epsilon"],"show");
    addelement("------","show");
    addelement("Function : "+data[1]["Function"],"show");
    addelement("initial x : "+data[1]["initial x"],"show");
    addelement("interval : "+data[1]["interval"],"show");
    addelement("Range : "+data[1]["Range"],"show");
    addelement("------","show");
    addelement("Function : "+data[2]["Function"],"show");
    addelement("x1 : "+data[2]["x1"],"show");
    addelement("x2 : "+data[2]["x2"],"show");
    addelement("interval : "+data[2]["interval"],"show");
    addelement("Range : "+data[2]["Range"],"show");
}
const showTime1 =(data)=>
{
    reset("show1");
    addelement("Array Size : "+data[0]["Array Size"],"show1");
    addelement("Array : ","show1");
    let arr = data[0]["Array"];
    let n = parseInt(data[0]["Array Size"]);
    console.log(arr);
    console.log(n);
    let str = "";
    for(let i = 0; i<n; i++)
    {
        for(let j = 0; j<4; j++)
        {
            str+=arr[i][j]+" ";
        }
        addelement(str,"show1");
        str="";
    }
    addelement("----------------","show1");
}
const showTime2 =(data)=>
{
    reset("show2");
    addelement("x : "+data[0]["x"],"show2");
    addelement("Array Size : "+data[0]["Array Size"],"show2");
    let arr = data[0]["Array"];
    let n = parseInt(data[0]["Array Size"]);
    console.log(arr);
    console.log(n);
    let str = "";
    for(let i = 0; i<n; i++)
    {
        for(let j = 0; j<2; j++)
        {
            str+=arr[i][j]+" ";
        }
        addelement(str,"show2");
        str="";
    }
    addelement("----------------","show2");
}
async function pop ()
{
    try{
        const data = await axios.get("https://my-json-server.typicode.com/ArKa47/api/posts").then(response => response.data)
        showTime(data);
    }catch(err){
        console.log(err);
    }
}
async function pop1 ()
{
    try{
        const data = await axios.get("https://my-json-server.typicode.com/ArKa47/api/matrix").then(response => response.data)
        showTime1(data);
    }catch(err){
        console.log(err);
    }
}
async function pop2 ()
{
    try{
        const data = await axios.get("https://my-json-server.typicode.com/ArKa47/api/newtonInter").then(response => response.data)
        showTime2(data);
    }catch(err){
        console.log(err);
    }
}

function API_TEST ()
{
    return(
        <div className="App">
            <div className="cute-mid">
                <h1 className="title is-1" id="test">API CHECK</h1>
                <p id="show"></p>
                <button className="button is-danger"onClick={pop}>api from root of equation</button>
                <p>----------------</p>
                <p id="show1"></p>
                <button className="button is-warning"onClick={pop1}>api from matrix</button>
                <p>----------------</p>
                <p id="show2"></p>
                <button className="button is-info"onClick={pop2}>api from matrix</button>
            </div>
            <br></br>
        </div>
    )
}

export default API_TEST;