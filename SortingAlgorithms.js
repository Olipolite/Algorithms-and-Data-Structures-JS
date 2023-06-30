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