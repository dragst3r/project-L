export const ADD_ITEM_TO_LIST = 'ADD_ITEM_TO_LIST';

export const add_item_to_list = (item) => {
    return {
        type: ADD_ITEM_TO_LIST,
        payload: item
    }
}