import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import roundNumberTo from '../../utils/roundNumberTo'
import { IResultTime } from 'models/typingTest'

interface UISliceInitialState {
  resultTime: IResultTime
  text: string
  isTestStarted: boolean
  isTestFinished: boolean
  isShowResult: boolean
  result: number
}

const initialState: UISliceInitialState = {
  resultTime: { m: 0, s: 0, ms: 0 },
  text: '',
  isTestStarted: false,
  isTestFinished: false,
  isShowResult: false,
  result: 0,
}

const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    setResultTime: (state, action: PayloadAction<IResultTime>) => {
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
    setIsShowResult: (state, action: PayloadAction<boolean>) => {
      state.isShowResult = action.payload
    },
    calcResult: (state) => {
      const minutes = state.resultTime.m + state.resultTime.s / 60 + state.resultTime.ms / 600
      state.result = roundNumberTo(state.text.length / minutes, 0)
    },
  },
})

export default UISlice.reducer
export const {
  setResultTime,
  setText,
  setIsTestStarted,
  setIsTestFinished,
  calcResult,
  setIsShowResult,
} = UISlice.actions
