const defaultState = {
  users: [],
}


export default function manageUsers(state = defaultState, action){
  switch (action.type) {
    case 'ADD_USER':
      return {...state, users: [...state.users, action.user]}
    default:
      return state
  }
}
