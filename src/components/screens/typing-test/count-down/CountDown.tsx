import Button from '@mui/material/Button'
import React, { useRef, useEffect, useState } from 'react'
import { setIsTestFinished, setIsTestStarted, setTime } from 'store/reducers/UISlice'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { Paper } from '@mui/material'
import Typography from '@mui/material/Typography'

const Countdown = () => {
  const [seconds, setSeconds] = useState(0)
  const { isTestStarted } = useAppSelector((state) => state.UIReducer)
  const dispatch = useAppDispatch()

  let intervalRef = useRef<NodeJS.Timeout>()

  const decreaseNum = () => setSeconds((prev) => prev + 1)
  useEffect(() => {
    if (isTestStarted) intervalRef.current = setInterval(decreaseNum, 100)
    return () => clearInterval(intervalRef.current as NodeJS.Timeout)
  }, [isTestStarted])

  const onStartTimer = () => {
    if (!isTestStarted) {
      setSeconds(0)
      dispatch(setIsTestStarted(true))
      dispatch(setIsTestFinished(false))
    }
  }

  const onStopTimer = () => {
    dispatch(setIsTestStarted(false))
    dispatch(setIsTestFinished(true))
    dispatch(setTime(seconds))
  }

  return (
    <Paper
      elevation={4}
      sx={(theme) => ({
        width: 200,
        height: 150,
        margin: '10px auto',
      })}
    >
      <Typography align='center' gutterBottom variant='h6' sx={{ paddingTop: '10px' }}>
        Время
      </Typography>
      <div style={{ width: '100%', textAlign: 'center', fontSize: '30px' }}>{seconds}</div>
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
        <Button
          onClick={onStartTimer}
          disabled={isTestStarted}
          color='secondary'
          variant='contained'
        >
          Старт
        </Button>
        <Button
          onClick={onStopTimer}
          disabled={!isTestStarted}
          color='secondary'
          variant='outlined'
        >
          Стоп
        </Button>
      </div>
    </Paper>
  )
}
export default Countdown
