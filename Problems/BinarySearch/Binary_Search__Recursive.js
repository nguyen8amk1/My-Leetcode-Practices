const binarySearch = (arr, x, start, end) => {
    const reachedEnd = start > end; 
    if(reachedEnd) return -1;
    const mid = Math.floor((start + end)/2); 

    const foundIt = arr[mid] == x; 
    if(foundIt) return mid;

    const itMightBeOnTheRight = arr[mid] < x;
    if(itMightBeOnTheRight) {
        return binarySearch(arr, x, mid+1, end);
    } else {
        return binarySearch(arr, x, start, mid-1);
    }
}


const arr = [1, 3, 5, 7, 8, 9];
const x = 5;

const index = binarySearch(arr, x, 0, arr.length-1); 
console.log(index, arr[index]);

