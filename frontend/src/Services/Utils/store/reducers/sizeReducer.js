const defaultState = {
    size: window.screen.width,
}

const UPDATE = "UPDATE";

export const sizeReducer = (state = defaultState, action) => {
    switch(action.type){
        case UPDATE:
            return {...state, size: action.payload}
        default:
            return state;
    }
};