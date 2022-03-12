import React, { useEffect, useRef, useState } from 'react'
import { TextField } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { setResult, setText } from 'store/reducers/UISlice'

const InputField = () => {
  const [value, setValue] = useState('')
  const focusInput = useRef<HTMLTextAreaElement>()
  const { isTestStarted, isTestFinished } = useAppSelector((state) => state.UIReducer)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (isTestFinished) {
      dispatch(setText(value))
      dispatch(setResult())
    }
  }, [value, isTestFinished, dispatch])

  useEffect(() => {
    if (isTestStarted) focusInput.current?.focus()
  }, [focusInput, isTestStarted])

  return (
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
  )
}

export default InputField
