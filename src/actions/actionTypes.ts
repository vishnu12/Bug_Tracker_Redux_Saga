
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
    MODAL_CLOSE,
    MODAL_OPEN_ADD,
    MODAL_OPEN_EDIT,
    ADD_BUG_RESTORE,
    REMOVE_BUG_RESTORE,
    EDIT_BUG_RESTORE,
    CHANGE_BUG_STATUS_RESTORE
} from '../types'


export interface Custom {
    page: number,
    pages: number,
    search: string,
    sort: string
}

export interface Data {
    id?: string,
    description?: string,
    resolved?: boolean,
    extra?: Custom
}

export interface IState {
    bugs: Data[],
    bug: Data,
    success: boolean,
    error: boolean,
    loading: boolean
}

export interface ModalState {
    show: boolean,
    close: boolean,
    mode: string
}



export type GetBugsActions =
    | { type: typeof GET_BUGS_REQUEST, payload: Data['extra'] }
    | { type: typeof GET_BUGS_SUCCESS, payload: IState['bugs'] }
    | { type: typeof GET_BUGS_FAIL }


export type GetBugByIdActions =
    | { type: typeof GET_BUG_BY_ID_REQUEST, payload: { id: string } }
    | { type: typeof GET_BUG_BY_ID_SUCCESS, payload: Data }
    | { type: typeof GET_BUG_BY_ID_FAIL }

export type AddBugActions =
    | { type: typeof ADD_BUG_REQUEST, paylosd: Data }
    | { type: typeof ADD_BUG_SUCCESS }
    | { type: typeof ADD_BUG_FAIL }
    | { type: typeof ADD_BUG_RESTORE }


export type RemoveBugActions =
    | { type: typeof REMOVE_BUG_REQUEST, payload: { id: string } }
    | { type: typeof REMOVE_BUG_SUCCESS }
    | { type: typeof REMOVE_BUG_FAIL }
    | { type: typeof REMOVE_BUG_RESTORE }


export type EditBugActions =
    | { type: typeof EDIT_BUG_REQUEST, payload: Data }
    | { type: typeof EDIT_BUG_SUCCESS }
    | { type: typeof EDIT_BUG_FAIL }
    | { type: typeof EDIT_BUG_RESTORE }


export type ChangeBugStatusActions =
    | { type: typeof CHANGE_BUG_STATUS_REQUEST, payload: Data }
    | { type: typeof CHANGE_BUG_STATUS_SUCCESS }
    | { type: typeof CHANGE_BUG_STATUS_FAIL }
    | { type: typeof CHANGE_BUG_STATUS_RESTORE }



export type ModalActions =
    | { type: typeof MODAL_CLOSE }
    | { type: typeof MODAL_OPEN_ADD }
    | { type: typeof MODAL_OPEN_EDIT }
