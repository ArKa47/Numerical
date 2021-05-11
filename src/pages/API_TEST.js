import React from 'react';
import axios from 'axios';
/*
var data = axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then(response =>{
        console.log(response.data);
    },err =>{
        console.log(err);
    })
    */
//document.getElementById("pop").innerHTML=data["title"];

async function pop ()
{
    try{
        const data = await axios.get("https://my-json-server.typicode.com/ArKa47/api/newtonInter").then(response => response.data)
        let mat = data[0]["Array"];
        document.getElementById("pop").innerHTML=mat[0][1];
    }catch(err){
        document.getElementById("pop").innerHTML=err;
    }
}

function API_TEST ()
{
    return(
        <div className="App">
            <div className="cute-mid">
                <h1 id="pop">API_TEST;</h1>
                <button onClick={pop}>click me!</button>
            </div>
        </div>
    )
}

export default API_TEST;