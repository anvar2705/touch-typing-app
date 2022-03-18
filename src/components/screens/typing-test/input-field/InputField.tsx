import React, { useEffect, useRef, useState } from 'react'
import { Paper } from '@mui/material'
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
  const inputRef = useRef<HTMLTextAreaElement>(null)
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
      inputRef.current?.focus()
    }
  }, [inputRef, isTestStarted])

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
  const onKeyPressHandler = (event: React.KeyboardEvent<HTMLTextAreaElement>, index: number) => {
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
  const onKeyDownHandler = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Backspace') event.preventDefault()
  }

  // get text template for mask in the input field
  const getTextTemplateSplitted = (text: Array<string>) => {
    return text.map((letter, index) => <span key={`${index}${letter}`}>{letter}</span>)
  }

  return (
    <Paper
      elevation={4}
      sx={{
        position: 'relative',
        height: '200px',
        backgroundColor: 'white',
        zIndex: 5,
        padding: '20px',
      }}
    >
      <div style={{ opacity: 0.25, width: '100%', height: '100%', pointerEvents: 'none' }}>
        {getTextTemplateSplitted(textTemplateSplitted)}
      </div>
      <textarea
        value={inputText}
        onChange={(event) => {
          setInputText(event.target.value)
        }}
        onKeyPress={(event) => {
          onKeyPressHandler(event, letterIndex)
        }}
        onKeyDown={onKeyDownHandler}
        ref={inputRef}
        disabled={!isTestStarted}
        style={{
          width: '100%',
          height: '100%',
          fontSize: 'inherit',
          fontFamily: 'inherit',
          resize: 'none',
          outline: 'none',
          border: 'none',
          borderRadius: '4px',
          position: 'absolute',
          top: '0px',
          left: '0px',
          zIndex: -5,
          padding: '20px',
          boxSizing: 'border-box',
        }}
      />
    </Paper>
  )
}

export default InputField
