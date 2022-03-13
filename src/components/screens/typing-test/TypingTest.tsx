import React from 'react'
import { Container } from '@mui/material'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import TextTemplate from './text-template/TextTemplate'
import InputField from './input-field/InputField'
import Button from '@mui/material/Button'
import { setIsTestFinished, setIsTestStarted } from 'store/reducers/TypingTestSlice'
import TestResult from 'components/screens/typing-test/test-result/TestResult'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const TypingTest = () => {
  const { isTestStarted, isTestFinished, isShowResult } = useAppSelector(
    (state) => state.TypingTestReducer
  )
  const dispatch = useAppDispatch()

  const onToggleStart = () => {
    if (!isTestStarted) {
      dispatch(setIsTestStarted(true))
    } else if (isTestStarted && !isTestFinished) {
      dispatch(setIsTestFinished(true))
    } else return
  }
  return (
    <Container maxWidth='lg'>
      <Box sx={{ margin: '30px auto' }}>
        <Typography variant='h5' textAlign='center' paragraph>
          Тест скорости печати
        </Typography>
        {!isShowResult ? (
          <>
            <TextTemplate />
            <Button
              onClick={onToggleStart}
              fullWidth
              color='secondary'
              variant='contained'
              style={{ margin: '20px auto' }}
            >
              {!isTestStarted ? 'Начать' : 'Завершить'}
            </Button>
            <InputField />
          </>
        ) : (
          <TestResult />
        )}
      </Box>
    </Container>
  )
}

export default TypingTest
