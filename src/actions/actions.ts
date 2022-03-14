import { Data, IState } from "./actionTypes"
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
    MODAL_OPEN_ADD,
    MODAL_OPEN_EDIT,
    MODAL_CLOSE,
    ADD_BUG_RESTORE,
    REMOVE_BUG_RESTORE,
    EDIT_BUG_RESTORE,
    CHANGE_BUG_STATUS_RESTORE,
    CHANGE_PAGE,
    CHANGE_PAGES,
    SEARCH,
    SORT
} from '../types'


export const getBugsRequest = () => ({
    type: GET_BUGS_REQUEST,
})

export const getBugsSuccess = (payload: IState['bugs']) => ({
    type: GET_BUGS_SUCCESS,
    payload
})

export const getBugsFail = () => ({
    type: GET_BUGS_FAIL
})

export const addBugRequest = (payload: Data) => ({
    type: ADD_BUG_REQUEST,
    payload
})

export const addBugSucess = () => ({
    type: ADD_BUG_SUCCESS
})

export const addBugFail = () => ({
    type: ADD_BUG_FAIL,
})

export const addBugRestore = () => ({
    type: ADD_BUG_RESTORE
})

export const getBugByIdRequest = (payload: { id: string }) => ({
    type: GET_BUG_BY_ID_REQUEST,
    payload
})


export const getBugByIdSuccess = (payload: Data) => ({
    type: GET_BUG_BY_ID_SUCCESS,
    payload
})

export const getBugByIdFail = () => ({
    type: GET_BUG_BY_ID_FAIL
})

export const removeBugRequest = (payload: { id: string }) => ({
    type: REMOVE_BUG_REQUEST,
    payload
})


export const removeBugSuccess = () => ({
    type: REMOVE_BUG_SUCCESS
})

export const removeBugFail = () => ({
    type: REMOVE_BUG_FAIL
})

export const removeBugRestore = () => ({
    type: REMOVE_BUG_RESTORE
})

export const editBugRequest = (payload: { id: string, description: string }) => ({
    type: EDIT_BUG_REQUEST,
    payload
})

export const editBugSuccess = () => ({
    type: EDIT_BUG_SUCCESS,
})

export const editBugFail = () => ({
    type: EDIT_BUG_FAIL,
})

export const editBugRestore = () => ({
    type: EDIT_BUG_RESTORE
})

export const changeStatusRequest = (payload: Data) => ({
    type: CHANGE_BUG_STATUS_REQUEST,
    payload
})

export const changeStatusSuccess = () => ({
    type: CHANGE_BUG_STATUS_SUCCESS,
})

export const changeStatusFail = () => ({
    type: CHANGE_BUG_STATUS_FAIL,
})

export const changeStatusRestore = () => ({
    type: CHANGE_BUG_STATUS_RESTORE,
})

export const openModalAdd = () => ({
    type: MODAL_OPEN_ADD
})

export const openModalEdit = () => ({
    type: MODAL_OPEN_EDIT
})

export const modalClose = () => ({
    type: MODAL_CLOSE
})

export const changePage = (payload: number) => ({
    type: CHANGE_PAGE,
    payload
})

export const changePages = (payload: number) => ({
    type: CHANGE_PAGES,
    payload
})

export const search = (payload: string) => ({
    type: SEARCH,
    payload
})

export const sort = (payload: string) => ({
    type: SORT,
    payload
})



