import * as actionTypes from './actions';

export const initialState = {
    opened: true,
}

const CustomizationReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_MENU: 
            return {
                ...state,
                opened: action.opened
            };
        default: 
            return state;
    }
}

export default CustomizationReducer;