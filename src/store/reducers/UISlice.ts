import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import roundNumberTo from '../../utils/roundNumberTo'

const initialState = {
  resultTime: 0,
  text: '',
  isTestStarted: false,
  isTestFinished: false,
  result: 0,
}

const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    setResultTime: (state, action: PayloadAction<number>) => {
      state.resultTime = action.payload
    },
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
    setIsTestStarted: (state, action: PayloadAction<boolean>) => {
      state.isTestStarted = action.payload
    },
    setIsTestFinished: (state, action: PayloadAction<boolean>) => {
      state.isTestFinished = action.payload
    },
    setResult: (state) => {
      state.result = roundNumberTo(state.text.length / (state.resultTime / 600), 0)
    },
  },
})

export default UISlice.reducer
export const { setResultTime, setText, setIsTestStarted, setIsTestFinished, setResult } =
  UISlice.actions
