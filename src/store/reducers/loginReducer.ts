const SET_USER_LOGIN = "SET_USER_LOGIN";

type SetUserLogin = {
    type: typeof SET_USER_LOGIN
    login: string
}

type ActionsTypes = SetUserLogin

const initialState = {
    login: 'noName',
}

export default function loginReducer(state = initialState, action: ActionsTypes) {
    switch (action.type) {
        case SET_USER_LOGIN: {
            return {
                ...state,
                login: action.login
            }
        }
        default:
            return state
    }
}
