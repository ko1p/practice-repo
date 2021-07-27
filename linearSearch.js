const array = [1, 4, 5, 8, 56, 32, 11, 3, 7, 10];
let counter = 0;

const linearSearch = (array, number) => {
    for (let i = 0; i < array.length; i++) {
        counter += 1;
        if (array[i] === number) {
            return i;
        }
    }
    return null;
};


console.log(linearSearch(array, 3));
console.log('Число итераций:', counter);