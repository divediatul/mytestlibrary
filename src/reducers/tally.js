export default function tally(state = {}, action) {
    switch (action.type) {
      case 'ADD_TALLY_DATA': {
        console.log(action.payload, "dhaka!!!!!!")
        return action.payload;
      }
      default:
        return state
    }
  }