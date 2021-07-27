const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9];
let counter = 0;

const bubbleSort = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                const less = array[j + 1];
                const bigger = array[j];
                array[j] = less;
                array[j + 1] = bigger;
            }
            counter += 1;
        }
    }
    return array
}

console.log(bubbleSort(arr));
console.log('Число итераций:', counter);