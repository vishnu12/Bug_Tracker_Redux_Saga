import { all, fork } from "redux-saga/effects";
import { watcherSaga } from "./bugSaga";


function* rootSaga() {
  yield all([fork(watcherSaga)]);
}

export default rootSaga