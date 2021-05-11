import addelement from './addelement';
import Fixed from './Fixed';

const math = require('mathjs');

function crammer_detail (n, where)
{
    //var element = document.getElementById(where);
    var arr = new Array(n);
    var equal = new Array(n);
    var str = "";
    var vessel = "";
    //take matrix from input to a programming matrix
    for(let i=0 ; i<n; i++){
        str = "equal"+i;
        arr[i]=[];
        equal[i] = parseFloat(document.getElementById(str).value);
        for(let j=0 ; j<n ; j++){
            str = "matrix"+i+j;
            arr[i][j]= parseFloat(document.getElementById(str).value);
        }
    }
    //
    //create a copy array from the original array above ^
    let sup_arr = new Array(n);
    for(let i = 0 ; i<n ; i++)
    {
        sup_arr[i]=[];
        for(let j = 0 ; j<n ; j++)
        {
            sup_arr[i][j]=arr[i][j];
        }
    }
    //
    let deto = math.det(arr); // det of the original matrix
    addelement("Original det = "+deto,where);
    let sup_deto = 0; // det of each crammer matrix
    let ans = new Array(n); // the aray for every anwser
    let ppp = "";// string man..
    let ppp_color = "";
    /*this about ot get messy*/
    var node;
    var element = document.getElementById(where);
    ///////////////////////////
    for(let i=0; i<n; i++)
    {
        for(let j=0; j<n; j++)
        {
            sup_arr[j][i] = equal[j];
        }
        for(let ii=0; ii<n; ii++)
        {
            var para = document.createElement("p");
            var para_higthligth = document.createElement("span");
            para_higthligth.style="color:blue;"
            node = document.createTextNode(" | ")
            para.appendChild(node);
            addelement(para, where)
            ppp = "|";//clear element and replace with |
                for(let j=0; j<n; j++)
                {
                    //ppp += sup_arr[ii][j] + " | "
                    if(j==i){
                        node = document.createTextNode(sup_arr[ii][j] + " | ")
                        para_higthligth.appendChild(node);
                        para.appendChild(para_higthligth);
                    }
                    else
                    {
                        node = document.createTextNode(sup_arr[ii][j] + " | ")
                        para.appendChild(node);
                    }
                    addelement(para, where);
                }            
        }
        sup_deto = math.det(sup_arr);
        ans[i] = sup_deto/deto;
        ppp = "X"+(i+1)+" = "+sup_deto+"/"+deto+" = "+Fixed(ans[i],2);
        addelement(ppp, where);
        ppp = "";
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

export default crammer_detail;