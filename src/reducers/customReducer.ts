import { Custom, CustomAction } from "../actions/actionTypes";
import { CHANGE_PAGE, CHANGE_PAGES, SEARCH, SORT } from "../types";

export const customReducer = (state: Custom = { page: 1, pages: 1, search: '', sort: 'all' }, action: CustomAction) => {
    switch (action.type) {
        case CHANGE_PAGE:
            return {
                ...state,
                page: action.payload
            }

        case CHANGE_PAGES:
            return {
                ...state,
                pages: action.payload
            }


        case SEARCH:
            return {
                ...state,
                search: action.payload
            }

        case SORT:
            return {
                ...state,
                sort: action.payload
            }

        default:
            return state;
    }
}