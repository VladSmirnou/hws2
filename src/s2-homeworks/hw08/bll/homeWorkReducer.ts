import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): any => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return [...state].sort(({name: n1}, {name: n2}) => {
                return action.payload === 'up' ? n1.localeCompare(n2) : n2.localeCompare(n1)
            }) // need to fix
        }
        case 'check': {
            return state.filter(user => user.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
