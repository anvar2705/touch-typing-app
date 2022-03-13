import React from 'react'
import { Container } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import TextTemplate from './text-template/TextTemplate'
import InputField from './input-field/InputField'
import Button from '@mui/material/Button'
import { setIsTestFinished, setIsTestStarted } from 'store/reducers/UISlice'

const TypingTest = () => {
  const { result, isTestStarted, isTestFinished } = useAppSelector((state) => state.UIReducer)
  const dispatch = useAppDispatch()

  const onToggleStart = () => {
    if (!isTestStarted) {
      dispatch(setIsTestFinished(false))
      dispatch(setIsTestStarted(true))
    } else if (isTestStarted && !isTestFinished) {
      dispatch(setIsTestStarted(false))
      dispatch(setIsTestFinished(true))
    } else return
  }
  return (
    <Container maxWidth='lg'>
      <TextTemplate />
      <Button
        onClick={onToggleStart}
        fullWidth
        color='secondary'
        variant='contained'
        style={{ marginBottom: '20px' }}
      >
        {!isTestStarted ? 'Начать' : 'Завершить'}{' '}
      </Button>
      <InputField />
      {isTestFinished ? <div>Результат: {result}</div> : null}
    </Container>
  )
}

export default TypingTest
