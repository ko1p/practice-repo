const array: string[] = ['one', 'two']
const array2: Array<string> = ['one', 'two']

interface IObj {
    [key: string]: string
}

const arrayObjects1: IObj[] = [
    {
        one: "one"
    },
    {
        two: 'two'
    }
]

///

const arrayObjects2: Array<object> = [
    {
        one: "one"
    },
    {
        two: 'two'
    }
]

const arrayObjects3: Array<IObj> = [{one: '1'}]

/////

// const promise: Promise<string> = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('This promise was resolved')
//     }, 2000)
// })

// promise.then(data => console.log(data))

const mergeObjects = <T extends object, K extends object> (a: T, b: K) => {
    return Object.assign({}, a, b)
}

const merge = mergeObjects({one: 'one'}, {two: 'two'})
console.log(merge.one)

interface ILength {
    length: number
}

const withCount = <T extends ILength>(value: T) => {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    }
}

function getObjectValue<T extends object, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

class Collection<T extends string | number | boolean> {
    constructor(private items: T[] = []) {

    }

    add(item: T) {
        this.items.push(item)
    }

    remove(item: T) {
        this.items = this.items.filter(i => i !== item)
    }

    getItems(): T[] {
        console.log(this.items)
        return this.items
    }
}

const strings = new Collection(['string1', 'string4'])
strings.remove('string4')
strings.getItems()

const numbers = new Collection([1, 4])
numbers.remove(4)
numbers.getItems()

// const objects = new Collection([{one: 1}, {two: 2}])
// objects.remove({two: 2})
// objects.getItems()