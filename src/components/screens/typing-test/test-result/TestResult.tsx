import React, { forwardRef } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { Button, List, ListItem, ListItemText, Paper } from '@mui/material'
import Typography from '@mui/material/Typography'
import { clearResult } from 'store/reducers/TypingTestSlice'

const TestResult = forwardRef<HTMLButtonElement>(({}, ref) => {
  const { result, resultTime } = useAppSelector((state) => state.TypingTestReducer)
  const dispatch = useAppDispatch()

  const onStartAgain = () => {
    dispatch(clearResult())
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
        ref={ref}
        color='secondary'
        sx={{ width: '300px', marginTop: '30px' }}
        variant='contained'
        size='large'
      >
        Начать заново (Enter)
      </Button>
    </Paper>
  )
})

export default TestResult
