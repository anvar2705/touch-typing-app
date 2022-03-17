import React, { KeyboardEvent, useEffect, useRef, useState } from 'react'
import { Paper, TextField } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import {
  calcResult,
  setIsShowResult,
  setIsTextEntered,
  setResultText,
} from 'store/reducers/TypingTestSlice'

const InputField = () => {
  const [inputText, setInputText] = useState('')
  const [textTemplateSplitted, setTextTemplateSplitted] = useState<Array<string>>([])
  const [letterIndex, setLetterIndex] = useState(0)
  const focusInput = useRef<HTMLTextAreaElement>()
  const { isTestStarted, isTestFinished, textTemplate } = useAppSelector(
    (state) => state.TypingTestReducer
  )
  const dispatch = useAppDispatch()

  // when the test is over
  useEffect(() => {
    if (isTestFinished) {
      dispatch(setResultText(inputText))
      dispatch(calcResult())
      dispatch(setIsShowResult(true))
    }
  }, [inputText, isTestFinished, dispatch])

  // when the test started
  useEffect(() => {
    if (isTestStarted) {
      focusInput.current?.focus()
    }
  }, [focusInput, isTestStarted])

  // set separated text template for controlling input
  useEffect(() => {
    setTextTemplateSplitted(textTemplate.value.split(''))
  }, [textTemplate])

  // disable finish button if text is not entered
  useEffect(() => {
    if (isTestStarted && inputText.length === textTemplate.value.length) {
      dispatch(setIsTextEntered(true))
    }
  }, [isTestStarted, inputText, textTemplate, dispatch])

  // check each entered letter
  const onKeyPressHandler = (event: KeyboardEvent<HTMLDivElement>, index: number) => {
    let checkedLetter = textTemplateSplitted[index]
    if (event.key !== checkedLetter) {
      if (checkedLetter === 'ё' && event.key === 'е') {
        return setLetterIndex(index + 1)
      }
      event.preventDefault()
      return false
    }
    setLetterIndex(index + 1)
  }
  const onKeyDownHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Backspace' && letterIndex > 0) setLetterIndex(letterIndex - 1)
  }

  return (
    <Paper elevation={4}>
      <TextField
        value={inputText}
        onChange={(event) => {
          setInputText(event.target.value)
        }}
        onKeyPress={(event) => {
          onKeyPressHandler(event, letterIndex)
        }}
        onKeyDown={onKeyDownHandler}
        inputRef={focusInput}
        multiline
        rows={5}
        fullWidth
        disabled={!isTestStarted}
      />
    </Paper>
  )
}

export default InputField
