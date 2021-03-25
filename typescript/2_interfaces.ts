// === Interfaces ===

interface IRect {
    readonly id: string | number
    color?: string
    size: {
        width: number
        heigth: number
    }
}

const rect1: IRect = {
    id: 1,
    size: {
        heigth: 10,
        width: 25
    },
    color: 'red',
}

const rect2: IRect = {
    id: 2,
    size: {
        width: 12,
        heigth: 11
    }
}

rect2.color = 'blue'
rect2.color = 'yellow'
// rect2.id = 1 this is readonly property

const rect3 = {} as IRect
const rect4 = <IRect>{}

// ========= 

interface IRectWithArea extends IRect {
    getArea: () => number
}

const rect5: IRectWithArea = {
    id: 5,
    size: {
        width: 10,
        heigth: 5
    },
    getArea(): number {
        return this.size.width * this.size.heigth
    } 
}

console.log(rect5.getArea())

// Classes

interface IClock {
    num: number
    time: Date
    setTime(date: Date): void
    setNum(num: number): void
}

class Clock implements IClock {
    time: Date = new Date()
    num: number = 0
    setTime(date) {
        this.time = date
    }
    setNum(num) {
        this.num = num
    }
}

const clock = new Clock()
clock.setTime(1231231233425)
console.log(clock)

//==================

interface IStyles {
    margin: string
    [key: string]: string
}

const css: IStyles = {
    margin: '0 0 0 10px',
    color: 'red',
    border: '1px solid grey'
}