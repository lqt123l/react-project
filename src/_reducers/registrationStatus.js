export function registrationStatus(state = {}, action) {
    switch (action.type) {
      case 'REGISTER_REQUEST':
        return { registering: true };
      case 'REGISTER_SUCCESS':
        return {};
      case 'REGISTER_FAIL':
        return {error:action.payload};
      default:
        return state
    }
  }