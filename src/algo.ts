export function getBubbleSortAnimations(arr: number[]) {
    var animations:any = []
    bubbleSort(arr, animations)
    return animations
}

export function getInsertionSortAnimations(arr: number[]) {
    var animations:any = []
    insertionSort(arr, animations)
    return animations
}

export function getSelectionSortAnimations(arr: number[]) {
    var animations:any = []
    selectionSort(arr, animations)
    return animations
}

export function getMergeSortAnimations(arr: number[]) {
    var animations:any = []
    mergeSort(arr, animations)
    return animations
}

export function getHeapSortAnimations(arr: number[]) {
    var animations:any = []
    heapSort(arr, animations)
    return animations
}

export function getQuickSortAnimations(arr: number[]) {
    var animations:any = []
    quickSort(arr, animations)
    return animations
}

export function bubbleSort(arr: number[], animations: any){
    var length = arr.length
    for (var i = 0; i < length-1; i++){
        for (var j = 0; j < (length-1-i); j++) {
            // animations.push([j,j])
            // animations.push([j,j+1])
            if (arr[j] > arr[j+1]) {
                animations.push([j ,arr[j+1]])
                animations.push([j+1 ,arr[j]])
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr;
}

export function insertionSort(arr: number[], animations: any){
    var length = arr.length
    for (var i = 1; i < length; i++) {
        const current = arr[i]
        let j = i - 1
        while ((j > -1) && (current < arr[j])) {
            animations.push([j+1, arr[j]])
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = current;
        animations.push([j+1, current])
    }
    return arr;

}

export function selectionSort(arr: number[], animations: any){
    var length = arr.length
    for(var i = 0; i < length; i++) {
        let smallIndex = i;
        for(let j = i+1; j < length; j++){
            if(arr[j] < arr[smallIndex]) {
                smallIndex=j;
            }
         }
        if (smallIndex !== i) {
            // Swapping the elements
            animations.push([i ,arr[smallIndex]])
            animations.push([smallIndex ,arr[i]])
            let tmp = arr[i];
            arr[i] = arr[smallIndex];
            arr[smallIndex] = tmp;
       }
    }
    return arr;
}

export function mergeSort(arr: number[], animations: any){
    var length = arr.length
    var extraArr = arr.slice()
    mergeHelper(arr, 0, length - 1, extraArr, animations)
    return animations
}

function mergeHelper(arr: number[], startIndex: number, endIndex: number, extraArr: number[], animations: any) {
    if(startIndex === endIndex) { return }
    const halfIndex = Math.floor((startIndex + endIndex) / 2)
    mergeHelper(extraArr, startIndex, halfIndex, arr, animations)
    mergeHelper(extraArr, halfIndex+ 1, endIndex, arr, animations)
    merge(arr, startIndex, halfIndex, endIndex, extraArr, animations)
}

function merge(arr: number[], startIndex: number, middleIndex: number, endIndex: number, extraArr: number[], animations: any) {
    var k = startIndex, i = startIndex, j = middleIndex + 1
    while (i <= middleIndex && j <= endIndex) {
        if(extraArr[i] <= extraArr[j]) {
            animations.push([k, extraArr[i]])
            arr[k++] = extraArr[i++]
        } else {
            animations.push([k, extraArr[j]])
            arr[k++] = extraArr[j++]
        }
    }
    while(i <= middleIndex) {
        animations.push([k, extraArr[i]])
        arr[k++] = extraArr[i++]
    }
    while (j <= endIndex) {
        animations.push([k, extraArr[j]])
        arr[k++] = extraArr[j++]
    }
}

// function merge(arr: number[], index1Start: number, index1End: number, index2Start: number, index2End: number, extraArr: number[], animations: number[]) {
//     var newArr = []
//     var k1 = index1Start, k2 = index2Start, k3 = 0
//     while (k1 <= index1End && k2 <= index2End) {
//         var temp = 0
//         if(arr[k1] <= arr[k2]) {
//             temp = arr[k1]
//             k1++
//         } else {
//             temp = arr[k2]
//             k2++
//         }
//         newArr[k3] = temp
//         k3++
//     }
//     while(k2 <= index2End) {
//         newArr.push(arr[k2])
//         k2++
//     }
//     while (k1 <= index1End) {
//         newArr.push(arr[k1])
//         k1++
//     }
//     console.log("merged: " + newArr)
// }

export function heapSort(arr: number[], animations: any){
    var n = arr.length
    for(var i = n/2-1; i >= 0; i--) {
        heapify(arr, n, i, animations)
    }

    for (var k = n - 1; k >= 0; k--) {
        animations.push([0, arr[k]])
        animations.push([k, arr[0]])
        var temp = arr[0]
        arr[0] = arr[k]
        arr[k] = temp

        heapify(arr, k, 0, animations)
    }
    return arr
}

function heapify(arr: number[], n: number, i: number, animations: any) {
    var largest = i
    var left = 2 * i + 1
    var right = 2 * i + 2

    if (left < n && arr[largest] < arr[left]) {
        largest = left
    }
     if (right < n && arr[largest] < arr[right]) {
        largest = right
     }
     if (largest !== i) {
        animations.push([largest, arr[i]])
        animations.push([i, arr[largest]])
        var temp = arr[i]
        arr[i] = arr[largest]
        arr[largest] = temp

        heapify(arr, n, largest, animations)
     }
}

export function quickSort(arr: number[], animations: any) {
    var length = arr.length
    quickHelper(arr, 0, length - 1, animations)
    return arr
}

function quickHelper(arr: number[], low: number, high: number, animations: any) {
    if(low < high) {
        var pi = partition(arr, low, high, animations)
        quickHelper(arr, low, pi - 1, animations)
        quickHelper(arr, pi + 1, high, animations)
    }
}

function partition(arr: number[], low: number, high: number, animations: any) {
    var pivot = arr[high]
    var smallerIndex = (low - 1)

    for(var i = low; i < high ; i++) {
        if(arr[i] < pivot) {
            smallerIndex++
            animations.push([smallerIndex, arr[i]])
            animations.push([i, arr[smallerIndex]])
            var temp = arr[smallerIndex]
            arr[smallerIndex] = arr[i]
            arr[i] = temp
        }
    }
    animations.push([smallerIndex + 1, arr[high]])
    animations.push([high, arr[smallerIndex + 1]])
    var temp2 = arr[smallerIndex + 1]
    arr[smallerIndex + 1] = arr[high]
    arr[high] = temp2
    return (smallerIndex + 1)
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}

function randomNumber(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

export function generateArr(arr: number[],numOfElements: number){
    for(var i = 0; i < numOfElements; i ++) {
        arr[i] = getRandomInt(700)
    }
    return arr
}
