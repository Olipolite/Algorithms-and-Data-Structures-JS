// PROBLEM - Given an array of integers, sort the array. 
// Bubble sort is not very good sorting algorithm in th real world. But will be helpful to understund other sort algorithms. 
// Miight not never use this except maybe in interviews or a stepping stone to other algorithms. 

const bubbleSort = (arr) => {
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i]
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
                swapped = true
            }
        }
    } while(swapped)
}

const arr = [8, 20 ,-2, 4, -6]
bubbleSort(arr)
console.log(arr) // [-6, -2, 4, 8, 20]

//Big-O = O(n^2)

// PROBLEM - Given an array of integers, sort the array.
// j is the sorted part of the array. The while loop itirates over the sorted part of the array.

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++) {
        let numberToInsert = array[i]
        let j = i - 1
        while(j >= 0 && array[j] > numberToInsert) {
            array[j+1] = array[j]
            j = j-1
        }
        array[j+1] = numberToInsert
    }
}

const array = [8, 20, -2, 4, -6]
insertionSort(array)
console.log(array)

// Big-O = O(n^2) 

// PROBLEM - Given an array of integers, sort the array.
//

const quickSort = (quickArr) => {
    if (quickArr.length < 2) {
        return quickArr
    }
    let pivot = quickArr[quickArr.length - 1]
    const leftArr = []
    const rightArr = []
    for (let i = 0; i < quickArr.length - 1; i++) {
        if (quickArr[i] < pivot) {
            leftArr.push(quickArr[i])
        } else {
            rightArr.push(quickArr[i])
        }
    }
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
}

const quickArr = [8, 20, -2, 4, -6]
console.log(quickSort(quickArr))
