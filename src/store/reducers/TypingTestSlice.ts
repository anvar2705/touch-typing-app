import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import roundNumberTo from '../../utils/roundNumberTo'
import { IResultTableItem, IResultTime } from 'models/typingTestModels'
import { DEFAULT_USERNAME } from 'constants/constants'
import { ITextTemplate } from 'constants/textTemplates'

interface UISliceInitialState {
  username: string
  textTemplate: ITextTemplate
  resultTime: IResultTime
  text: string
  isTestStarted: boolean
  isTestFinished: boolean
  isShowResult: boolean
  result: number
  resultTable: Array<IResultTableItem>
}

const initialState: UISliceInitialState = {
  username: DEFAULT_USERNAME,
  textTemplate: { id: 0, value: '' },
  resultTime: { m: 0, s: 0, ms: 0 },
  text: '',
  isTestStarted: false,
  isTestFinished: false,
  isShowResult: false,
  result: 0,
  resultTable: [],
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
      const result = roundNumberTo(state.text.length / minutes, 0)
      state.result = result
      state.resultTable.push({
        id: state.resultTable.length,
        name: state.username,
        result,
        time: state.resultTime,
        template: `Вариант ${state.textTemplate.id}`,
      })
    },
  },
})

export default TypingTestSlice.reducer
export const {
  setResultTime,
  setText,
  setIsTestStarted,
  setIsTestFinished,
  calcResult,
  setIsShowResult,
  setUsername,
  setTextTemplate,
} = TypingTestSlice.actions
