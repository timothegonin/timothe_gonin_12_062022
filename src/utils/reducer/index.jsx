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

//dispatch to component
//START
// const { activeUser } = useContext(UserContext)
// useEffect(() => {
//   const setUser = (entry) => {
//     dispatch({
//       type: 'SET_NEW_USER',
//       payload: {
//         user: new User(Number(entry)),
//       },
//     })
//   }
//   setUser(idFromURL)
// }, [idFromURL])
//END
