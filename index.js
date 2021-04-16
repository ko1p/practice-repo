/**
* Представим, что на одном из проектов нам потребовался DSL для решения бизнес-задачи. Наши пользователи - большие поклонники Lisp, поэтому синтаксис этого языка им более привычен, 
* чем синтаксис JS.
* Парсер оригинального синтаксиса Lisp нам написать хоть и не так сложно, но все же для MVP это может быть неразумно, а вот простенький интерпретатор нам точно будет полезен.
*
* Что мы хотим получить:
* 1. Возможность объявлять функции таким образом: [defn, 'funcName', ['a', 'b'], ['sum', 'a', 'b']], где
*      defn - ключевое слово для определения функции
*      'funcName' - имя функции
*      ['a', 'b'] - перечисление аргументов функции
*      ['sum', 'a', 'b'] - тело функции (т. е. вызов функции sum с аргументами a и b)
* 2. Соответственно вызов функции должен быть таким ['funcName', 'a', 'b']
*
* Ниже уже реализован некоторый runtime и есть пример вызова interpret. Необходимо имплементировать interpret и defn.
* 
* P.S.
* Даже если не получится выполнять задание в полной мере (например, где-то застряли), все равно скидывайте в качестве решения то, что получилось.
*/

const defn = (functionName, args, body) => {
    console.log(functionName, args, body)
    const func = body[0]
    body.shift()
    const bodyArgs = [...body]
    return (...bodyArgs) => {
        return func(...bodyArgs)
    }
}

const interpret = (...code) => {
    // принимаю массив, проверяю что пришла действительно функция (объявляется через ключевое слово 'defn')
    if (typeof code[0][0] === 'function' || code[0][0] === 'defn') {
        // проверяю есть ли название функции
        const functionName = code[0][1] // если названия функции нет
        const args = code[0][2] || [] // если аргументов при объявлении функции нет, то будет пустой массив
        const body = code[0][3]
        const obj = {}
        obj[functionName] = defn(functionName, args, body)

        if (code[1]) {
            const arguments = code[1]
            arguments.shift()            
            return obj[functionName](...arguments)
        }
    } else {
        return
    }
}

// Функция, используемая в runtime
const sum = (...args) => args.reduce((prev, curr) => prev + curr)

// Пример вызова функции interpret
const result = interpret(
    [defn, "sum3", ['a', 'b', 'c'], [sum, 'a', 'b', 'c']],
    ['sum3', 10, 20, 30]
)

console.assert(result === 60)