export default function manageUsers(state = {users: []}, action){
  switch (action.type) {
    case 'ADD_USER':
      const users = [...state.users, action.user]
      return {...state, users: users }
    default:
      return state
  }
}
