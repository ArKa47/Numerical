import React from 'react';
import ReactDOM from 'react-dom';
import create_matrice from '../../fumction/crammer_support'
import resetelement from '../../fumction/resetElement'
import showMatrix from '../../fumction/crammer_show'
import cramer_cal from '../../fumction/crammer_cal';
import createButton from '../../fumction/createButton'
import crammer_detail from '../../fumction/crammer_detail'
import guass from '../../pictures/guass_elimi.jpg'

let button_exit = false;
let detail_exit = false;

function cramer ()
{
    const detail = () =>
    {
        let pp = parseInt(document.getElementById("n").value)
        resetelement("inner_detail_show")
        crammer_detail(pp,"inner_detail_show")
    }
    const cram = () =>
    {
        let pp = parseInt(document.getElementById("n").value)
        resetelement("ans")
        cramer_cal(pp,"ans");
        if(!detail_exit)
        {
            detail_exit = true;
            createButton("Show Detail", "button is-info", detail, "inner_detail_button");
        }
    }
    const pop = () =>
    {
        let pp = parseInt(document.getElementById("n").value)
        resetelement("show")
        showMatrix(pp,"show")
        if(button_exit != true){
            button_exit = true;
           createButton("Gaussian rule", "button is-warning", cram, "crammer");
        }
    }
    const add = () =>
    {
        let pp = parseInt(document.getElementById("n").value)
        resetelement("mat")
        create_matrice(pp,"mat")
        /*Interesting*/
        createButton("submit matrix", "button is-primary", pop, "mat");
        /**/
    }
    return(
        <div className="App">
            <br></br>
            <div className="container">
                <h1 className="title is-1" id="test">Gauss Eliminate</h1>
                <h1 className="subtitle">Matrix</h1>
                <br></br>
                <img src={guass} alt="guass"/>
                <div className="cute-mid">
                    <br></br>
                    <p>Simple eliminate matrix and find each of variable</p>
                </div>
                <br></br>
                <div className="my-SubcontainerM">
                    <input className="input is-primary" placeholder="n*n matrix" id="n"></input>
                </div>
                <button className="button is-info" onClick={add} id="iteration">plot matrix</button>
                <br></br>
                <br></br>
                <div className="cute-mid" id="main">
                    <div id="mat">
                    </div>
                    <br></br>
                    <div id="show">
                    </div>
                    <br></br>
                    <div id="crammer">
                    </div>
                    <br></br>
                    <div id="ans">
                    </div>
                    <br></br>
                    <div id="detail">
                        <div id="inner_detail_button"></div>
                        <br></br>
                        <div id="inner_detail_show"></div>
                    </div>
                </div>
                <br></br>
              <br></br>
            </div>
        </div>
    )
}

export default cramer;