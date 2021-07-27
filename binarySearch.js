const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let counter = 0;

const binarySearch = (array, number) => {
    let middle, position = null;
    let start = 0;
    let end = array.length;
    let found = false;

    while(!found && start <= end) {
        counter += 1;
        middle = Math.floor((end + start) / 2);
        if (array[middle] === number) {
            found = true;
            position = middle;
            return position;
        }
        if (number < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
};


console.log(binarySearch(array, 10));
console.log('Число итераций:', counter);