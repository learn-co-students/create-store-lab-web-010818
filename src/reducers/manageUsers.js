export default function manageUsers(state = { users: [] }, action){


  switch(action.type){
    case 'ADD_USER':

      console.log("Current state.users: ", state.users)
      console.log("Updating state.users with: ", action.user)
      return Object.assign({}, state, {
        users: state.users.concat(action.user)
      })

    default:
      console.log("Initial state.users: ", state.users)
      return state
  }


}
