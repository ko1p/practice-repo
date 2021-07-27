const arr = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9];
let counter = 0;

const selectSort = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                const less = array[j];
                const bigger = array[i];
                array[i] = less;
                array[j] = bigger;
            }
            counter += 1;
        }
    }
    return array
}

console.log(selectSort(arr));
console.log('Число итераций:', counter);