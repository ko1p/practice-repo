export const setCalculations = (calculations: any[]) => { // TODO Убрать any
    return {
        type: "SET_CALCULATIONS",
        calculations
    }
}