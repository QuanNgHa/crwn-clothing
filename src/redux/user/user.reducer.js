const INITIAL_STATE = {
    //When start a app, we must have initial state
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state, //Spread the prev State
                currentUser: action.payload //Modify the property we want
            }

        default:
            return state;
    }

}

export default userReducer;