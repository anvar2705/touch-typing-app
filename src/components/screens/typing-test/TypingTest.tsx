import React from 'react'
import Countdown from './count-down/CountDown'
import { Container } from '@mui/material'
import InputField from './input-field/InputField'
import { useAppSelector } from '../../../hooks/redux'
import TextTemplate from './text-template/TextTemplate'

const TypingTest = () => {
  const { result, isTestFinished } = useAppSelector((state) => state.UIReducer)
  return (
    <Container maxWidth='lg'>
      <TextTemplate />
      <Countdown />
      <InputField />
      {isTestFinished ? <div>Результат: {result}</div> : null}
    </Container>
  )
}

export default TypingTest
