import { combineReducers, configureStore } from '@reduxjs/toolkit'
import UIReducer from 'store/reducers/UISlice'

const rootReducer = combineReducers({
  UIReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
