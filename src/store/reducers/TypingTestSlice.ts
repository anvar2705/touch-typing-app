import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import roundNumberTo from '../../utils/roundNumberTo'
import { IResultTableItem, IResultTime } from 'models/typingTestModels'
import { DEFAULT_USERNAME } from 'constants/constants'
import { ITextTemplate } from 'constants/textTemplates'

interface UISliceInitialState {
  username: string
  textTemplate: ITextTemplate
  resultTime: IResultTime
  resultText: string
  isTestStarted: boolean
  isTestFinished: boolean
  isShowResult: boolean
  result: number
  resultTable: Array<IResultTableItem>
  isTextEntered: boolean
}

const initialState: UISliceInitialState = {
  username: DEFAULT_USERNAME,
  textTemplate: { id: 0, value: '' },
  resultTime: { m: 0, s: 0, ms: 0 },
  resultText: '',
  isTestStarted: false,
  isTestFinished: false,
  isShowResult: false,
  result: 0,
  resultTable: [],
  isTextEntered: false,
}

const TypingTestSlice = createSlice({
  name: 'TypingTest',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setTextTemplate: (state, action: PayloadAction<ITextTemplate>) => {
      state.textTemplate = action.payload
    },
    setResultTime: (state, action: PayloadAction<IResultTime>) => {
      state.resultTime = action.payload
    },
    setResultText: (state, action: PayloadAction<string>) => {
      state.resultText = action.payload
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
    setIsTextEntered: (state, action: PayloadAction<boolean>) => {
      state.isTextEntered = action.payload
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
