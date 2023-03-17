
import {Appearance} from 'react-native';

const initialState = 
{
    theme: Appearance.getColorScheme(),
};

export const reducerHandler = (state = initialState, action) => 
{
    switch (action.type) 
    { 
        case "THEME":
            return {
                ...state.theme,
                theme: action.theme
            };  
        default:
            return state;
    }  
};