import { ModalActions, ModalState } from "../actions/actionTypes";
import {
    MODAL_CLOSE,
    MODAL_OPEN_ADD,
    MODAL_OPEN_EDIT
} from '../types'

export const modalReducer = (state: ModalState = { show: false, close: false, mode: '' }, action: ModalActions) => {

    switch (action.type) {
        case MODAL_OPEN_ADD:
            return {
                ...state,
                show: true,
                mode: 'Add Bug'

            }
        case MODAL_OPEN_EDIT:
            return {
                ...state,
                show: true,
                mode: 'Edit Bug'

            }


        case MODAL_CLOSE:
            return {
                ...state,
                show: false,
                close: true
            }

        default:
            return state;
    }

}