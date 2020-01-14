function map(sourceArray, callback) {
    let newArray = []
    sourceArray.forEach(element => {
        newArray.push(callback(element))
    })
    return newArray
}

function reduce(sourceArray, callback, startingPoint) {
    let endValue
    
    if (startingPoint !== undefined) {
        endValue = startingPoint
    } else {
        endValue = sourceArray[0]
    }
  
    sourceArray.forEach((element, index) => {

        if (index === 0 && endValue === sourceArray[index]) {
        } else {
            endValue = callback(element, endValue)
        }
    })
    return endValue
}