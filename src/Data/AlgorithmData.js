const AlgorithmData = [
  {
    concept: 'bubble sort',
    definition: `Sorting algorithm that begins by comparing first two elements of an array with each other. 
    If the first element has greater value, swap the two elments. Iterate through the array while repeating 
    this comparison. Iterate through the array multiple times so that extreme values such as lowest value at the 
    end of the array will be able to be eventually swap its way to being the first element. You can set the 
    iterations to stop when you can iterate through array without swapping. Alternatively, you can simply
    iterate through array arr.length - 1 times.  Time complexity average: Θ(n^2)
    `,
    example: `
    function bubbleSort(arr) {
      for (let i = arr.length; i > 1; i--) {
        console.log('i', i)
        for (let j = 0; j < arr.length -1; j++) {
          console.log('j',j);
          if (arr[j] > arr[j + 1]) {
             console.log('j value', arr[j]);
              console.log('j+1 value', arr[j + 1]);
            let mSwapValue = arr[j];
            arr[j] = arr[j + 1]; 
            arr[j + 1] = mSwapValue;
          }
        }
        console.log('current array', [arr])
      }
      return arr;
    }
    bubbleSort([2, 1, 4, 3, 0])
    `,
  },
  {
    concept: `quick sort`,
    definition:`quicksort is a sorting algorithm centered around picking a pivot and breaking down the array
    based on the pivot into smaller arrays. It is a divide and conquer strategy which the array is recursively 
    broken down into two arrays with one for values less than the pivot on one array and values greater than pivot 
    on the other array. The pivot is now in the correct position and this process is called partition (division of database). 
    Time complexity average: Θ(n log(n))`,
    example: `
    function quickSort(nums) {
      const arr = nums.slice();
      if (nums.length < 2) return nums;
      const lessOrEqualToPivot = [];
      const greaterThanPivot = [];
      const middleIndex = Math.floor(arr.length / 2);
      const pivot = arr.splice(middleIndex, 1);
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= pivot) {
          lessOrEqualToPivot.push(arr[i]);
        } else {
          greaterThanPivot.push(arr[i]);
        }
      }
      return[].concat(quickSort(lessOrEqualToPivot), //new pivot values every recursive step as pivot is spliced from array. Prevents repeat values in sorted array. 
        pivot, 
        quickSort(greaterThanPivot));
    }
    let arr = [10, 7, 8, 9, 1, 5];
    quickSort(arr);
    `, 
  },
  {
    concept: `merge sort`,
    defintion: ``,
    example: ``,
  }
]