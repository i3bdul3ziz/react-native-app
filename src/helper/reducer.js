
const initialState = 
{
    item: 
    {
        name: 'Aziz',
        date: 'Yesterday'
    },
};

export const setFirstClickedItem = (state = initialState, action) => 
{
    switch (action.type) 
    {
        case "FIRST_CLICKED_ITEM":
            return {
                ...state,
                clickedItem: action.clickedItem
            };  
        default:
            return state;
    }  
};