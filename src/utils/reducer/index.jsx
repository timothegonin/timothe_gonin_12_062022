export const initialState = {
  user: null,
}

export const userReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_NEW_USER':
      return {
        ...state.user,
        user: payload.user,
      }
    case 'RESET_USER':
      return {
        ...state.user,
        user: initialState.user,
      }
    default:
      return state
  }
}
