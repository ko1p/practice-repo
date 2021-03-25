// === Boolean type === //

const isLoading: boolean = false
const isFetching: boolean = true

// === Number type === //

const one: number = 1
const num: number = 5
const five: number = num
const float: number = 3.14
const eNum: number = 3e10

// === String type === //

const message: string = 'Hellow Typescript'

// === Array type === //

const numsArray1: number[] = [1, 2, 3, 4, 5]
        // OR like a generic 
const numsArray2: Array<number> = [1, 2, 3, 4, 5]

const wordsArray1: string[] = ['One', 'Two', "Three"]
        // OR like a generic 
const wordsArray2: Array<string> = ['One', 'Two', "Three"]

// === Tuple type === //

const contact: [string, number] = ["Anton", 1281]

// === Any type === //

let someVar: any = 'string'
someVar = 42
someVar = []

// === Functions ====

// VOID for functions wich returns undefined

const func = (name: string):void => {
    console.log(name)
}

// OR 

function func2(name: string):void {
    console.log(name)
}

func('Anton')

// === Never type === 

// Never for functions wich never end or returns error

const throwError = (error: string): never => {
    throw new Error(error);    
}

const infinite = (): never => {
    while(true) {
        // ...some code
    }
}

// Type

type Login = string
const login: Login = 'login'

type Weigth = number
const myWeight: Weigth = 88

type ID = string | number // it can be a string or a number
const myId: ID = '1281'
const myId2: ID = 1281

