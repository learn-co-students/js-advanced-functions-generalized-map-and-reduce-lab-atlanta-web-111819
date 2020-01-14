// Add your functions here
function map(array, func){
    let r =[]
    for(let i=0;i<array.length;i++){
        r.push(func(array[i]))
    }
    return r
} 

function reduce(array, func, num){
    let val
    let i
    if(num === undefined){
        val = array[0]
        i = 1
    }else{
        val = num
        i = 0
    }

    for(;i<array.length;i++){
        val = func(array[i], val)
    }
    return val
}