
let shadow = 0;
//let arr_mock = [];
//let arr_shadow = [];
let b = [];
let cout = 0;

let mathjs = require('mathjs');

function newton_util (arr, arr_mock,n)
{
    if(n == 0)
    {
        return ;
    }
    let arr_shadow = [];
    for(let i = 1; i<n; i++)
    {
        /*
        console.log(arr[i-1][0]+" "+arr[i-1][1]);
        console.log(arr[i][0]+" "+arr[i][1]);
        */
       let pop = (arr_mock[i]-arr_mock[i-1])/(arr[i+shadow][0]-arr[i-1][0])
       if(i==1)
       {
            b.push(pop);
       }
       arr_shadow[i-1] = pop;
       //console.log(arr_shadow[i-1])
    }
    let nn=n-1
    shadow++;
    //console.log("--------------------------------arr_shadow = " + arr_shadow.length + " n = " + nn)
    newton_util(arr, arr_shadow, n-1)
}

function newmer_inter (arr,n)
{
    b.length=0;
    shadow=0;
    b.push(arr[0][1]);
    let arr_mock = [];
    for(let i =0 ; i<n ; i++)
    {
        arr_mock[i] = arr[i][1];
    }
    newton_util(arr,arr_mock,n);
    console.log("ans leng = "+b.length);
    //
    let predic_newton=b[0]
    let holdX="";
    console.log(predic_newton);
    //
    for(let i = 1; i<b.length; i++)
    {
        holdX+="(x-"+arr[i-1][0]+")";
        predic_newton+="+"+b[i]+"*"+holdX;
        console.log(predic_newton);
        //console.log("pop = "+ans[i]);
    }
    let i_did_it = mathjs.simplify(predic_newton).toString();
    console.log(i_did_it);
    return i_did_it;
}

export default newmer_inter;