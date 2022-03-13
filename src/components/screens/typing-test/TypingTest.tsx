import React from 'react'
import Timer from './timer/Timer'
import { Container } from '@mui/material'
import InputField from './input-field/InputField'
import { useAppSelector } from '../../../hooks/redux'
import TextTemplate from './text-template/TextTemplate'

const TypingTest = () => {
  const { result, isTestFinished } = useAppSelector((state) => state.UIReducer)
  return (
    <Container maxWidth='lg'>
      <TextTemplate />
      <Timer />
      <InputField />
      {isTestFinished ? <div>Результат: {result}</div> : null}
    </Container>
  )
}

export default TypingTest
