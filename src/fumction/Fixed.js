
function Fixed(num, n)
{
    var fix = num.toFixed(n);
    var n = parseFloat(fix)
    return n;
}

export default Fixed;
