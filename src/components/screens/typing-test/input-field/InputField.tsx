import React, { useEffect, useRef, useState } from 'react'
import { Paper, TextField } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { calcResult, setIsShowResult, setText } from 'store/reducers/TypingTestSlice'

const InputField = () => {
  const [value, setValue] = useState('')
  const focusInput = useRef<HTMLTextAreaElement>()
  const { isTestStarted, isTestFinished } = useAppSelector((state) => state.TypingTestReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isTestFinished) {
      dispatch(setText(value))
      dispatch(calcResult())
      dispatch(setIsShowResult(true))
    }
  }, [value, isTestFinished, dispatch])

  useEffect(() => {
    if (isTestStarted) {
      setValue('')
      focusInput.current?.focus()
    }
  }, [focusInput, isTestStarted])

  return (
    <Paper elevation={4}>
      <TextField
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }}
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
