const initialState = {showLoginFrom:false};

export function loginForm(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_LOGIN_FORM':
            return {
                showLoginForm: true
            };
        case 'DISABLE_LOGIN_FORM':
            return {
                showLoginForm: false
            };
        default:
            return state
    }
}