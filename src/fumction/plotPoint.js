let width = 700;
let height = 500;
let tt=[]
let count=0;
function plotPoint (arr,arr_data,n)
{
    if(arr_data.length > 0)
    {
        arr_data.length=0;
    }
    arr_data.push({
        points: [
            ...arr
        ],
        fnType: 'points',
        graphType: 'scatter',
        color: '#6f2da8',
    });
    arr_data.push({
        points: [

        ],
        fnType: 'points',
        graphType: 'polyline',
        color: 'black',
    });
    for(let i = 0; i<n+1; i++)
    {
        arr_data.push({
            fn: "0",
            range: [100, 100]
        });
    }
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

export default plotPoint;