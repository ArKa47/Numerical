import addelement from './addelement';
import Fixed from './Fixed';

const math = require('mathjs');

function gaussian_cal (n, where)
{
    //var element = document.getElementById(where);
    var arr = new Array(n);
    var equal = new Array(n);
    var str = "";
    var vessel = "";
    for(let i=0 ; i<n; i++){
        str = "equal"+i;
        arr[i]=[];
        equal[i] = parseFloat(document.getElementById(str).value);
        for(let j=0 ; j<n ; j++){
            str = "matrix"+i+j;
            arr[i][j]= parseFloat(document.getElementById(str).value);
        }
    }
    let sup_arr = new Array(n);
    for(let i = 0 ; i<n ; i++)
    {
        sup_arr[i]=[];
        for(let j = 0 ; j<n ; j++)
        {
            sup_arr[i][j]=arr[i][j];
        }
    }
    //reset array
        for(let i = 0 ; i<n ; i++)
        {
            sup_arr[i]=[];
            for(let j = 0 ; j<n ; j++)
            {
                sup_arr[i][j]=arr[i][j];
            }
        }
    //
    //for
    //var br = document.createElement("br");
    //element.appendChild(br);
}

export default gaussian_cal;