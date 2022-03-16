import React, { KeyboardEvent, useEffect, useRef, useState } from 'react'
import { Paper, TextField } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { calcResult, setIsShowResult, setText } from 'store/reducers/TypingTestSlice'

const InputField = () => {
  const [value, setValue] = useState('')
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
      dispatch(setText(value))
      dispatch(calcResult())
      dispatch(setIsShowResult(true))
    }
  }, [value, isTestFinished, dispatch])

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

  const onKeyPressHandler = (event: KeyboardEvent<HTMLDivElement>, index: number) => {
    if (event.key !== textTemplateSplitted[index]) {
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
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
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
