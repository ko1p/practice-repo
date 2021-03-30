"use strict";
const array = ['one', 'two'];
const array2 = ['one', 'two'];
const arrayObjects1 = [
    {
        one: "one"
    },
    {
        two: 'two'
    }
];
///
const arrayObjects2 = [
    {
        one: "one"
    },
    {
        two: 'two'
    }
];
const arrayObjects3 = [{ one: '1' }];
/////
// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This promise was resolved')
//     }, 2000)
// })
// promise.then(data => console.log(data))
const mergeObjects = (a, b) => {
    return Object.assign({}, a, b);
};
const merge = mergeObjects({ one: 'one' }, { two: 'two' });
console.log(merge.one);
const withCount = (value) => {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    };
};
function getObjectValue(obj, key) {
    return obj[key];
}
class Collection {
    constructor(items = []) {
        this.items = items;
    }
    add(item) {
        this.items.push(item);
    }
    remove(item) {
        this.items = this.items.filter(i => i !== item);
    }
    getItems() {
        console.log(this.items);
        return this.items;
    }
}
const strings = new Collection(['string1', 'string4']);
strings.remove('string4');
strings.getItems();
const numbers = new Collection([1, 4]);
numbers.remove(4);
numbers.getItems();
// const objects = new Collection([{one: 1}, {two: 2}])
// objects.remove({two: 2})
// objects.getItems()
