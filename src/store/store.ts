import { combineReducers, configureStore } from '@reduxjs/toolkit'
import TypingTestReducer from 'store/reducers/TypingTestSlice'

const rootReducer = combineReducers({
  TypingTestReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
