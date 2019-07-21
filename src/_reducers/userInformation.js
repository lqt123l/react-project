const initialState = {
    username:'',
    savedProducts:[]
};
export function userInformation(state = initialState, action) {
    switch (action.type) {
        case 'GET_USER_INFORMATION_SUCCESS':
            return action.payload;
        case 'GET_USER_INFORMATION_FAIL':
            return state;
        case 'SAVE_PRODUCT_SUCCESS':
            return {
                ...state,
                savedProducts:action.payload
            }
        case 'DELETE_SAVE_PRODUCT_SUCCESS':
            return{
                ...state,
                savedProducts:action.payload
            }
        case 'LOGOUT':
            return initialState
        default:
            return state
    }
}
