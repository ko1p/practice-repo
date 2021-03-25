const addNumber = (a:string, b:string): string => {
    return a + b
}

const toUppercase = (str: string): string => {
    return str.trim().toUpperCase()
}

interface MyPosition {
    x: number | undefined
    y: number | undefined
}

interface MyPositionWithDefault extends MyPosition {
    default: string
}


function position(): MyPosition
function position(a: number): MyPositionWithDefault 
function position(a: number, b: number): MyPosition 

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }

    if (a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }

    return {x: a, y: b}
}

console.log(position(), 'no args')
console.log(position(5), 'only a')
console.log(position(4, 12), 'a and b')