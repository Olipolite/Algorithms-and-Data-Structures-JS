// Search algorithms
// Linear search, Binary search & Recursive binary search
//
// PROBLEM - Given an array of 'n' elements and a target element 't',  find the index of 't' in the array. Return -1 if the target element is not found.


const linearSearch = (arr, t) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === t) {
            return i
        }
    }
    return -1
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10)) // 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)) // 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)) // -1

// Big-O = O(n)

//------------------------------------

// PROBLEM - Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

const binarySearch =  (arr, t) => {
    let startIndex = 0;
    let endIndex = arr.length - 1
    while (startIndex <= endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2)
        if (t === arr[middleIndex]) {
            return middleIndex
        }
        if (t < arr[middleIndex] ) {
            endIndex = middleIndex - 1
        }
        startIndex = middleIndex + 1
    }
    return -1 
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)) // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)) // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)) // -1

// Big-O = O(logn) Because the input size gets smaller and smaller each iteration of the while loop.