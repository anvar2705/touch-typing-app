import React from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { Button, List, ListItem, ListItemText, Paper } from '@mui/material'
import Typography from '@mui/material/Typography'
import {
  setIsShowResult,
  setIsTestFinished,
  setIsTestStarted,
  setTextTemplate,
  setUsername,
} from 'store/reducers/TypingTestSlice'
import { DEFAULT_USERNAME } from 'constants/constants'

const TestResult = () => {
  const { result, resultTime } = useAppSelector((state) => state.TypingTestReducer)
  const dispatch = useAppDispatch()

  const onStartAgain = () => {
    dispatch(setIsTestStarted(false))
    dispatch(setIsTestFinished(false))
    dispatch(setIsShowResult(false))
    dispatch(setTextTemplate({ id: 0, value: '' }))
    dispatch(setUsername(DEFAULT_USERNAME))
  }

  return (
    <Paper
      elevation={4}
      sx={{
        height: '300px',
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant='h6' textAlign='center'>
        Результаты теста
      </Typography>
      <List sx={{ width: '100%' }}>
        <ListItem divider>
          <ListItemText>
            Время: {resultTime.m} мин {resultTime.s} сек
          </ListItemText>
        </ListItem>
        <ListItem divider>
          <ListItemText>Скорость: {result} знаков/мин</ListItemText>
        </ListItem>
      </List>
      <Button
        onClick={onStartAgain}
        color='secondary'
        sx={{ width: '200px', marginTop: '30px' }}
        variant='contained'
        size='large'
      >
        Начать заново
      </Button>
    </Paper>
  )
}

export default TestResult
