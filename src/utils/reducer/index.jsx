export const initialState = {
  id: null,
}

export const userReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_NEW_USER':
      console.log('SET_NEW_USER', payload)
      console.log('PREVSTATE', state)
      return {
        ...state.id,
        id: payload.id,
      }
    case 'RESET_USER':
      console.log('SET_NEW_USER', payload)
      console.log('PREVSTATE', state)
      return {
        ...state.id,
        id: initialState.id,
      }
    default:
      return state
  }
}
