import { combineReducers } from 'redux';
import CustomizationReducer from './costomizationReducer';

const reducer = combineReducers({
    customization: CustomizationReducer
})

export default reducer;