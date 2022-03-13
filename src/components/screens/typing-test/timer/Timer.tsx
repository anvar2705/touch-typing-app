import Button from '@mui/material/Button'
import React, { useState } from 'react'
import { Paper } from '@mui/material'
import Typography from '@mui/material/Typography'
import TimerDisplay from './TimerDisplay'
import {
  setIsTestFinished,
  setIsTestStarted,
  setResultTime,
} from '../../../../store/reducers/UISlice'
import { useAppDispatch } from '../../../../hooks/redux'

const Timer = () => {
  const [time, setTime] = useState({ m: 0, s: 0, ms: 0 })
  const [interv, setInterv] = useState<NodeJS.Timeout>()
  const dispatch = useAppDispatch()
  let { m, s, ms } = time

  const run = () => {
    ms++
    if (s >= 60) {
      m++
      s = 0
    }
    if (ms >= 10) {
      s++
      ms = 0
    }
    return setTime({ m, s, ms })
  }
  const onStartTimer = () => {
    setInterv(setInterval(run, 100))
    dispatch(setIsTestFinished(false))
    dispatch(setIsTestStarted(true))
  }
  const onStopTimer = () => {
    if (interv) clearInterval(interv)
    setTime({ m: 0, s: 0, ms: 0 })
    dispatch(setResultTime(m * 60 + s + ms / 10))
    dispatch(setIsTestStarted(false))
    dispatch(setIsTestFinished(true))
  }

  return (
    <Paper
      elevation={4}
      sx={{
        width: 200,
        height: 150,
        margin: '10px auto',
      }}
    >
      <Typography align='center' gutterBottom variant='h6' sx={{ paddingTop: '10px' }}>
        Время
      </Typography>
      <TimerDisplay time={time} />
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px' }}>
        <Button onClick={onStartTimer} color='secondary' variant='contained'>
          Старт
        </Button>
        <Button onClick={onStopTimer} color='secondary' variant='outlined'>
          Стоп
        </Button>
      </div>
    </Paper>
  )
}
export default Timer
