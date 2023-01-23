export const initialState = {
  id: null,
  user: null,
}

export const userReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_NEW_USER':
      console.log('SET_NEW_USER', payload.id, payload.user)
      console.log('PREVSTATE', state.id, state.user)
      return {
        ...state.id,
        ...state.user,
        id: payload.id,
        user: payload.user,
      }
    // case 'SET_NEW_USER_DATA':
    //   console.log('SET_NEW_USER_DATA', payload.user)
    //   console.log('PREVSTATE', state.user)
    //   return {
    //     ...state.user,
    //     user: payload.user,
    //   }
    case 'RESET_USER':
      console.log('RESET USER', 'PrevState', state)
      return {
        ...state.id,
        id: initialState.id,
      }
    default:
      return state
  }
}
