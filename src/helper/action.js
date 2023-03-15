export const firstClickedItemAction = (item) =>
{
    return {
        type: 'FIRST_CLICKED_ITEM',
        clickedItem: item
    };
};