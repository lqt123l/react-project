export function userInformation(state = {}, action) {
    switch (action.type) {
      case 'GET_USER_INFORMATION_SUCCESS':
        return action.payload;
      case 'GET_USER_INFORMATION_FAIL':
        return {}
      default:
        return state
    }
  }