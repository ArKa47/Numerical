import addelement from './addelement';
import Fixed from './Fixed';

const math = require('mathjs');

function cramer_cal (n, where)
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
    let deto = math.det(arr);
    let sup_deto = 0;
    let ans = new Array(n);
    let ppp = "";
    for(let i=0; i<n; i++)
    {
        for(let j=0; j<n; j++)
        {
            sup_arr[j][i] = equal[j];
        }
        sup_deto = math.det(sup_arr);
        ans[i] = sup_deto/deto;
        ppp = "X"+(i+1)+" = "+Fixed(ans[i],2);
        addelement(ppp, where);
        /*
        ppp = sup_arr[0][0]+" "+sup_arr[0][1]+" "+sup_arr[0][2];
        addelement(ppp, where);
        ppp = sup_arr[1][0]+" "+sup_arr[1][1]+" "+sup_arr[1][2];
        addelement(ppp, where);
        ppp = sup_arr[2][0]+" "+sup_arr[2][1]+" "+sup_arr[2][2];
        addelement(ppp, where);
        *///reset element
        for(let i = 0 ; i<n ; i++)
        {
            sup_arr[i]=[];
            for(let j = 0 ; j<n ; j++)
            {
                sup_arr[i][j]=arr[i][j];
            }
        }
    }
    //for
    //var br = document.createElement("br");
    //element.appendChild(br);
}

export default cramer_cal;