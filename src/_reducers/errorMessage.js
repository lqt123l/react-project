const errorMessage = (state=null, action) => {
    switch(action.type){
        case 'RECEIVE_PRODUCTS_FALURE':
            return action.message
        case 'RECEIVE_PRODUCTS':
            return null
        default:
            return state
    }
}

export default errorMessage
export const getErrorMessage = (state) => state.errorMessage