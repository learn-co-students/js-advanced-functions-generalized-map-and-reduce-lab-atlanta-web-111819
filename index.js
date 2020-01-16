

function map(array, something) {
    let arr = []
    for(let i = 0; i < array.length; i++) {
        arr.push(something(array[i]))
    }
    return arr
}

// function reduce(array, func, start) {
//     let accumulator = start
//     let isTrue = true
//     if(start) {
//        accumulator = start
//     } else {
//        accumulator = 0
//     }

//     for(let i = 0; i< array.length; i++) {
//         if(array[i]) {
//         accumulator += array[i]
//         } else {
//             isTrue = false
//         }
//     }
//     if(isTrue && typeof accumulator === "number") {
//         return accumulator
//     } else {
//         return isTrue
//     }
// }

function reduce(array, func, start) {
    let accumulator
    if(start) {
     accumulator = start
    } else {
     accumulator = array[0]
    }

    array.forEach((element, index) => {
        if (index === 0 && accumulator === array[index]) {
        } else {
            accumulator = func(element, accumulator)
        }
    })
    return accumulator
}

