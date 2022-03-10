import { createStore,applyMiddleware } from 'redux';
import {useSelector as useStateSelector,TypedUseSelectorHook} from 'react-redux'
import {combineReducers} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import {getBugsReducer,addBugReducer, getBugByIdReducer, removeBugReducer, editBugReducer, changeBugStatusReducer} from './reducers/bugReducer'
import rootSaga from './sagas';
import { modalReducer } from './reducers/modalReducer';



const sagaMiddleware = createSagaMiddleware()


const rootReducer=combineReducers({
    getBugs:getBugsReducer,
    addBug:addBugReducer,
    modal:modalReducer,
    getBug:getBugByIdReducer,
    removeBug:removeBugReducer,
    editBug:editBugReducer,
    changeBugStatus:changeBugStatusReducer
})

export type rootState=ReturnType<typeof rootReducer>

const store =createStore(rootReducer,composeWithDevTools(
    applyMiddleware(sagaMiddleware)
))

sagaMiddleware.run(rootSaga)

export const useSelector:TypedUseSelectorHook<rootState>=useStateSelector

export default store