import React, { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import TextTemplate from './text-template/TextTemplate'
import InputField from './input-field/InputField'
import Button from '@mui/material/Button'
import { setIsTestFinished, setIsTestStarted } from 'store/reducers/TypingTestSlice'
import TestResult from 'components/screens/typing-test/test-result/TestResult'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ResultTable from 'components/screens/typing-test/result-table/ResultTable'

const TypingTest = () => {
  const buttonStartRef = useRef<HTMLButtonElement>(null)
  const buttonRestartRef = useRef<HTMLButtonElement>(null)
  const { isTestStarted, isTestFinished, isShowResult, textTemplate, isTextEntered } =
    useAppSelector((state) => state.TypingTestReducer)
  const dispatch = useAppDispatch()

  const onToggleStart = () => {
    if (!isTestStarted) {
      dispatch(setIsTestStarted(true))
    } else if (isTestStarted && !isTestFinished) {
      dispatch(setIsTestFinished(true))
    } else return
  }

  // add event listener for Enter key in the window
  useEffect(() => {
    const handleEnterPressed = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        if (!isShowResult) buttonStartRef.current?.click()
        else buttonRestartRef.current?.click()
      }
    }
    window.addEventListener('keyup', handleEnterPressed)
    return () => window.removeEventListener('keyup', handleEnterPressed)
  }, [dispatch, isTestStarted, isTextEntered, isShowResult])

  return (
    <Box sx={{ fontSize: '20px' }}>
      <Typography variant='h5' textAlign='center' paragraph>
        Тест скорости печати
      </Typography>
      {!isShowResult ? (
        <>
          <TextTemplate />
          <Button
            onClick={onToggleStart}
            ref={buttonStartRef}
            fullWidth
            color='secondary'
            variant='contained'
            style={{ margin: '20px auto' }}
            disabled={textTemplate.value === '' || (!isTextEntered && isTestStarted)}
          >
            {!isTestStarted ? 'Начать (Enter)' : 'Завершить (Enter)'}
          </Button>
          <InputField />
        </>
      ) : (
        <TestResult ref={buttonRestartRef} />
      )}
      <ResultTable />
    </Box>
  )
}

export default TypingTest
