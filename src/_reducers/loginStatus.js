let user = localStorage.getItem('user');
const initialState = user ? { loggedIn: true, user } : { loggedIn: false };

export function loginStatus(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                loggingIn: true,
                user: action.user
            };
        case 'LOGIN_SUCCESS':
            return {
                loggedIn: true,
                user: action.user
            };
        case 'LOGIN_FAILURE':
            return {};
        case 'LOGOUT':
            return {
                loggedIn: false
            };
        default:
            return state
    }
}


