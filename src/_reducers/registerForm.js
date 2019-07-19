const initialState = {showRegisterForm:false};

export function registerForm(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_REGISTER_FORM':
            return {
                showRegisterForm: true
            };
        case 'DISABLE_REGISTER_FORM':
            return {
                showRegisterForm: false
            };
        default:
            return state
    }
}