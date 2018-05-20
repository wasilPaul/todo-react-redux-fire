import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import auth, { initAuthUserSync } from './state/auth'
import todos from './state/todos'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = combineReducers({
    auth,
    todos
})

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store

store.dispatch(initAuthUserSync())