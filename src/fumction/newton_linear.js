let width = 700;
let height = 500;
let tt=[]
let count=0;
function newton_linear (arr,arr_data,n)
{
    for(let i = 0; i<n+1; i++)
    {
        arr_data.pop();
    }
    if(arr_data[1])
    {
        arr_data.pop();
    }
    arr_data.push({
        points: [
            ...arr
        ],
        fnType: 'points',
        graphType: 'polyline',
        color: '#f4a460'//sand brown
    });
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

export default newton_linear;