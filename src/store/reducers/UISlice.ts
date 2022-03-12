import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  time: 0,
  text: '',
  isTestStarted: false,
  isTestFinished: false,
  result: 0,
}

const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    setTime: (state, action: PayloadAction<number>) => {
      state.time = action.payload
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
      state.result = state.text.length / (state.time / 600)
    },
  },
})

export default UISlice.reducer
export const { setTime, setText, setIsTestStarted, setIsTestFinished, setResult } = UISlice.actions
