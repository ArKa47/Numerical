import newton from './newmer_inter'

var interpolatingPolynomial = require('interpolating-polynomial');

let width = 700;
let height = 500;

function quadratic (arr, arr_data,n)
{
    for(let i = 0; i<n+1; i++)
    {
        arr_data.pop();
    }
    let f = interpolatingPolynomial(arr);
    let middle_arr = [];
    let new_arr = [];
    
    for(let i = 0; i<n; i++)
    {
        new_arr[i]=arr[i];
    }

    let insert_index=1;
    for(let i = 0; i<n-1; i++)
    {
        middle_arr[i]=[];
        middle_arr[i][0]=(new_arr[i][0]+new_arr[i+1][0]) / 2;
        let y = f(middle_arr[i]);
        middle_arr[i][1]=y;
        arr.splice(insert_index, 0, middle_arr[i]);//splice is an insert function in javascript where 0 in the middle is the number of item to delete before insert start from given index to insert
        insert_index+=2;
        //console.log("middle_arr = "+middle_arr[i][0]+" "+middle_arr[i][1]);
    }
    
    let nn = n+middle_arr.length;
    /*
    for(let i = 0; i<nn ; i++)
    {
        console.log("newArr = "+arr[i][0]+" "+arr[i][1]);
    }
    */
    let supArr_index=0;
    let holder = [];
   for(let i = 2; i<nn; i+=2)
   {
        let sup_arr=[];
        for(let j = i-2; j<=i; j++)
        {
            sup_arr[supArr_index]=[];
            sup_arr[supArr_index][0] = arr[j][0];
            sup_arr[supArr_index][1] = arr[j][1];
            console.log("supArr = "+sup_arr[supArr_index][0]+"  "+sup_arr[supArr_index][1])
            supArr_index++;
        }
        supArr_index=0;
        let equation = newton(sup_arr, 3);
        holder.push({
            fn: equation,
            nSamples: 50,
            range: [sup_arr[0][0], sup_arr[2][0]],
            color: '#f4a460',//sand brown
            graphType: 'polyline'
        });
        console.log("--------------------------------------------- sup_arr length = "+sup_arr.length);
        //console.log(equation);
   }
   for(let i = 0; i<holder.length; i++)
   {
    arr_data.push(
        holder[i]
     );
   }
   arr_data.push({
    fn: "0",
    range: [100, 100],
    graphType: 'polyline',
    color: "black"
   });
    var grahp_data = {
        target: '#pp',
        title: 'Visualize',
        width,
        height,
        grid: true,
        data: arr_data
    }
    return [grahp_data, arr_data];
}

export default quadratic;