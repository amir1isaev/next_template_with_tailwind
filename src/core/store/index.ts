import createSagaMiddleware, { Task } from 'redux-saga'

import { applyMiddleware, combineReducers, createStore, Store } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { interfaceReducer, storageReducer, userReducer } from './reducers'
import { rootWatcher } from './sagas'

const rootReducer = combineReducers({
  storage: storageReducer,
  user: userReducer,
  interface: interfaceReducer,
})

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    }
    if (state.count) nextState.count = state.count
    return nextState
  } else {
    return rootReducer(state, action)
  }
}

export interface SagaStore extends Store {
  sagaTask: Task
}

const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [sagaMiddleware]
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  ;(store as SagaStore).sagaTask = sagaMiddleware.run(rootWatcher)
  return store
}

const store = makeStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export const wrapper = createWrapper<Store<RootState>>(makeStore)
