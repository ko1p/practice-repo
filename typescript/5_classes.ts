class Typescript {
    version: string
    
    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `${name} this is ${this.version} of TypeScript`
    }
}

const typescript = new Typescript('1.0.0')

console.log(typescript.info('Anton'))

class Car1 {
    readonly numOfWeels: number = 4
    readonly model: string

    constructor(carModel) {
        this.model = carModel
    }
}

// OR THE SAME

class Car2 {
    readonly numOfWeels: number = 4

    constructor(readonly model: string) {

    }
}
//============

class Animal {
    protected voice: string = 'no sound'
    public color: string = 'black' // default type of key
    private go(): void {
        console.log(`${this.color} animal is going`)
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }

    public getVoice(): string {
        return this.voice
    }
}

const cat = new Cat()
console.log(cat.getVoice())
cat.setVoice('Miau')
console.log(cat.getVoice())