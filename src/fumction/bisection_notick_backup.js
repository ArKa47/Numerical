

function myinterv(plot) {
  const bisectionfn = (fn, xl, xr, fxold, epsilon=0.0001) =>
  {
    let xm = (xl+xr)/2
    addelement(xm,"pxm")
    addelement(xr,"pxr")
    addelement(xl,"pxl")
    const scopem = {
      x: xm
    }
    const scoper = {
      x: xr
    }
    let fxm = math.evaluate(fn, scopem)
    let final = Math.abs((fxm-fxold)/fxm)
    if(isNaN(final)) addelement(0,"pnum")
    else addelement(final,"pnum")
    if(final <= epsilon || isNaN(final))
    {
      document.getElementById("cheese").innerHTML= "Finish"
      return 0;
    }
    let fxr = math.evaluate(fn, scoper)
    if(fxm*fxr < 0) bisectionfn(fn, xm, xr, fxm, epsilon);
    else bisectionfn(fn, xl, xm, fxm, epsilon);
  }
}


export default myinterv;