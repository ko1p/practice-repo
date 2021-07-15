const SET_CALCULATIONS = 'SET_CALCULATIONS';

type SetCalculations = {
    type: typeof SET_CALCULATIONS
    calculations: any[] // TODO Убрать any
}

type ActionTypes = SetCalculations

const initialState = {
    calculationsList: []
}

export default function calculationsReducer(state = initialState, action: ActionTypes) {
    switch (action.type) {
        case SET_CALCULATIONS: {
            return {
                ...state,
                calculationsList: action.calculations
            }
        }
        default:
            return state
    }
}