import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import roundNumberTo from '../../utils/roundNumberTo'
import { IResultTableItem, IResultTime } from 'models/typingTestModels'
import { DEFAULT_USERNAME } from 'constants/constants'
import { ITextTemplate } from 'constants/textTemplates'

interface UISliceInitialState {
  isShowResult: boolean
  isTestStarted: boolean
  isTestFinished: boolean
  isTextEntered: boolean
  result: number
  resultTable: Array<IResultTableItem>
  resultText: string
  resultTime: IResultTime
  textTemplate: ITextTemplate
  username: string
}

const initialState: UISliceInitialState = {
  isShowResult: false,
  isTestStarted: false,
  isTestFinished: false,
  isTextEntered: false,
  result: 0,
  resultTable: [],
  resultText: '',
  resultTime: { m: 0, s: 0, ms: 0 },
  textTemplate: { id: 0, value: '' },
  username: DEFAULT_USERNAME,
}

const TypingTestSlice = createSlice({
  name: 'TypingTest',
  initialState,
  reducers: {
    setIsShowResult: (state, action: PayloadAction<boolean>) => {
      state.isShowResult = action.payload
    },
    setIsTestStarted: (state, action: PayloadAction<boolean>) => {
      state.isTestStarted = action.payload
    },
    setIsTestFinished: (state, action: PayloadAction<boolean>) => {
      state.isTestFinished = action.payload
    },
    setIsTextEntered: (state, action: PayloadAction<boolean>) => {
      state.isTextEntered = action.payload
    },
    setResultText: (state, action: PayloadAction<string>) => {
      state.resultText = action.payload
    },
    setResultTime: (state, action: PayloadAction<IResultTime>) => {
      state.resultTime = action.payload
    },
    setTextTemplate: (state, action: PayloadAction<ITextTemplate>) => {
      state.textTemplate = action.payload
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    calcResult: (state) => {
      const minutes = state.resultTime.m + state.resultTime.s / 60 + state.resultTime.ms / 600
      const result = roundNumberTo(state.resultText.length / minutes, 0)
      state.result = result
      state.resultTable.push({
        id: state.resultTable.length,
        name: state.username,
        result,
        time: state.resultTime,
        template: `Вариант ${state.textTemplate.id}`,
      })
    },
    clearResult: (state) => {
      state.username = DEFAULT_USERNAME
      state.textTemplate = { id: 0, value: '' }
      state.resultTime = { m: 0, s: 0, ms: 0 }
      state.resultText = ''
      state.isTestStarted = false
      state.isTestFinished = false
      state.isShowResult = false
      state.result = 0
      state.isTextEntered = false
    },
  },
})

export default TypingTestSlice.reducer
export const {
  setResultTime,
  setResultText,
  setIsTestStarted,
  setIsTestFinished,
  calcResult,
  setIsShowResult,
  setUsername,
  setTextTemplate,
  clearResult,
  setIsTextEntered,
} = TypingTestSlice.actions
