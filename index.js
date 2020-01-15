// Add your functions here
function map(array, something ){
    let newArray = []
    for(let i = 0; i < array.length; i++ ){
        let a = array[i]
        newArray.push(something(a))
    }
    return newArray

}


function reduce(array, something, starting){

    let some
    let index
    if(starting){
        some = starting
        index = 0
    }else{
        some = array[0]
        index = 1
    }

    for (let i = index; i < array.length; i++) {
      some = something(array[i], some)
    }
  
    return some;
  }