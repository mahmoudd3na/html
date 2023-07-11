function circleArea(radius){ 
    const area=(Math.pow(radius,2))*Math.PI;
    return  area.toFixed(2); 
}
let number=circleArea(7); 
console.log(number); 