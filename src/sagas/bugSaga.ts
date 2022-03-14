import { all, call, put, takeLatest, select } from "redux-saga/effects";
import { addBugFail, addBugRequest, addBugSucess, changePages, changeStatusFail, changeStatusRequest, changeStatusSuccess, editBugFail, editBugRequest, editBugSuccess, getBugByIdFail, getBugByIdRequest, getBugByIdSuccess, getBugsFail, getBugsRequest, getBugsSuccess, removeBugFail, removeBugRequest, removeBugSuccess } from "../actions/actions";
import { ADD_BUG_REQUEST, CHANGE_BUG_STATUS_REQUEST, EDIT_BUG_REQUEST, GET_BUGS_REQUEST, GET_BUG_BY_ID_REQUEST, REMOVE_BUG_REQUEST } from "../types";
import { getData, getDataById, addBug, changeBugStatus, editBug, removeBug } from '../helper'
import { Data } from "../actions/actionTypes";
import { rootState } from "../store";


function* getAllBugsSaga(): any {
    try {
        const state: rootState = yield select()
        const lt: number = (state.custom.page - 1) * 8
        const ut: number = state.custom.page * 8
        let filteredBugs: Data[] = []
        const response = yield call(getData)
        yield put(changePages(response.data.length % 8 === 0 ? response.data.length / 8 : Math.floor(response.data.length / 8 + 1)))
        const sortedData: Data[] = [...response.data].reverse().slice(lt, ut)
        if (state.custom.search) {
            filteredBugs = sortedData.filter((itm: Data) => itm.id?.toLowerCase().includes(state.custom.search) || itm.description?.toLowerCase().includes(state.custom.search))
        } else {
            filteredBugs =
                state.custom.sort === 'all' ?
                    sortedData :
                    state.custom.sort === 'open' ?
                        sortedData.filter((itm: Data) => itm.resolved === false) :
                        state.custom.sort === 'close' ?
                            sortedData.filter((itm: Data) => itm.resolved === true) : []
        }
        yield put(getBugsSuccess(filteredBugs))

    } catch (error) {
        yield put(getBugsFail())
    }
}

function* getBugSaga(action: ReturnType<typeof getBugByIdRequest>): any {
    try {
        const response = yield call(getDataById, action.payload.id)
        yield put(getBugByIdSuccess(response.data))
    } catch (error) {
        yield put(getBugByIdFail())
    }
}

function* addBugSaga(action: ReturnType<typeof addBugRequest>) {
    try {
        yield call(addBug, action.payload)
        yield put(addBugSucess())
    } catch (error) {
        yield put(addBugFail())
    }
}

function* removeBugSaga(action: ReturnType<typeof removeBugRequest>) {
    try {
        yield call(removeBug, action.payload.id)
        yield put(removeBugSuccess())
    } catch (error) {
        yield put(removeBugFail())
    }
}


function* changeBugStatusSaga(action: ReturnType<typeof changeStatusRequest>) {
    try {
        yield call(changeBugStatus, action.payload)
        yield put(changeStatusSuccess())
    } catch (error) {
        yield put(changeStatusFail())
    }
}




function* editBugSaga(action: ReturnType<typeof editBugRequest>) {
    try {
        yield call(editBug, action.payload)
        yield put(editBugSuccess())
    } catch (error) {
        yield put(editBugFail())
    }
}






export function* watcherSaga() {
    yield all([takeLatest(GET_BUGS_REQUEST, getAllBugsSaga),
    takeLatest(GET_BUG_BY_ID_REQUEST, getBugSaga),
    takeLatest(ADD_BUG_REQUEST, addBugSaga),
    takeLatest(REMOVE_BUG_REQUEST, removeBugSaga),
    takeLatest(EDIT_BUG_REQUEST, editBugSaga),
    takeLatest(CHANGE_BUG_STATUS_REQUEST, changeBugStatusSaga),
    ]);

}


