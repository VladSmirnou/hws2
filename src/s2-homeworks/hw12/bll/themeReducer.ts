const initState = {
    themeId: 1,
}
type State = typeof initState;

export const themeReducer = (state: State = initState, action: Action): State => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return { themeId: action.id }
        }
        // дописать
        default:
            return state
    }
}

type ChangeThemeActionType = {
    type: 'SET_THEME_ID',
    id: number
}

export const changeThemeId = (id: number): ChangeThemeActionType => {
    return { type: 'SET_THEME_ID' as const, id }
} // fix any

type Action = ReturnType<typeof changeThemeId>;
