import { AddBugActions, GetBugsActions, IState, GetBugByIdActions, Data, RemoveBugActions, EditBugActions, ChangeBugStatusActions } from "../actions/actionTypes";

import {
    GET_BUGS_REQUEST,
    ADD_BUG_FAIL,
    ADD_BUG_REQUEST,
    ADD_BUG_SUCCESS,
    CHANGE_BUG_STATUS_FAIL,
    CHANGE_BUG_STATUS_REQUEST,
    CHANGE_BUG_STATUS_SUCCESS,
    EDIT_BUG_FAIL,
    EDIT_BUG_REQUEST,
    EDIT_BUG_SUCCESS,
    GET_BUGS_SUCCESS,
    GET_BUG_BY_ID_FAIL,
    GET_BUG_BY_ID_REQUEST,
    GET_BUG_BY_ID_SUCCESS,
    REMOVE_BUG_FAIL,
    REMOVE_BUG_REQUEST,
    REMOVE_BUG_SUCCESS,
    GET_BUGS_FAIL,
    ADD_BUG_RESTORE,
    REMOVE_BUG_RESTORE,
    EDIT_BUG_RESTORE,
    CHANGE_BUG_STATUS_RESTORE
} from '../types'

export const addBugReducer = (state: IState = { bug: {}, bugs: [], success: false, error: false, loading: false }, action: AddBugActions): IState => {
    switch (action.type) {
        case ADD_BUG_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ADD_BUG_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true
            }


        case ADD_BUG_FAIL:
            return {
                ...state,
                error: true
            }

        case ADD_BUG_RESTORE:
            return {
                ...state,
                success: false
            }

        default:
            return state;
    }
}


export const getBugsReducer = (state: IState = { bug: {}, bugs: [], success: false, error: false, loading: false }, action: GetBugsActions): IState => {
    switch (action.type) {
        case GET_BUGS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_BUGS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                bugs: action.payload
            }


        case GET_BUGS_FAIL:
            return {
                ...state,
                error: true
            }

        default:
            return state;
    }
}


export const getBugByIdReducer = (state: IState = { bugs: [], bug: {}, success: false, error: false, loading: false }, action: GetBugByIdActions): IState => {
    switch (action.type) {
        case GET_BUG_BY_ID_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_BUG_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                bug: action.payload
            }


        case GET_BUG_BY_ID_FAIL:
            return {
                ...state,
                error: true
            }

        default:
            return state;
    }
}


export const removeBugReducer = (state: IState = { bugs: [], bug: {}, success: false, error: false, loading: false }, action: RemoveBugActions): IState => {
    switch (action.type) {
        case REMOVE_BUG_REQUEST:
            return {
                ...state,
                loading: true
            }

        case REMOVE_BUG_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }


        case REMOVE_BUG_FAIL:
            return {
                ...state,
                error: true
            }

        case REMOVE_BUG_RESTORE:
            return {
                ...state,
                success: false
            }

        default:
            return state;
    }
}



export const editBugReducer = (state: IState = { bugs: [], bug: {}, success: false, error: false, loading: false }, action: EditBugActions): IState => {
    switch (action.type) {
        case EDIT_BUG_REQUEST:
            return {
                ...state,
                loading: true
            }

        case EDIT_BUG_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }


        case EDIT_BUG_FAIL:
            return {
                ...state,
                error: true
            }

        case EDIT_BUG_RESTORE:
            return {
                ...state,
                success: false
            }

        default:
            return state;
    }
}



export const changeBugStatusReducer = (state: IState = { bugs: [], bug: {}, success: false, error: false, loading: false }, action: ChangeBugStatusActions): IState => {
    switch (action.type) {
        case CHANGE_BUG_STATUS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case CHANGE_BUG_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }


        case CHANGE_BUG_STATUS_FAIL:
            return {
                ...state,
                error: true
            }

        case CHANGE_BUG_STATUS_RESTORE:
            return {
                ...state,
                success: false
            }

        default:
            return state;
    }
}