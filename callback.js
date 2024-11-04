
findarea(2,findcircumference);
function findarea (r,callback){
    var area=Math.PI*r*r;
    console.log(the area is ${area});
    callback (r);
}

function findcircumference(r){
    var circumference=2*Math.PI*r;
    console.log(the circumference is ${circumference});
}


