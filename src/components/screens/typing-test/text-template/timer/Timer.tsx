import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { setResultTime } from 'store/reducers/TypingTestSlice'
import { IResultTime } from 'models/typingTestModels'

const Timer = () => {
  const [time, setTime] = useState<IResultTime>({ m: 0, s: 0, ms: 0 })
  const [interv, setInterv] = useState<NodeJS.Timeout>()
  const { isTestStarted, isTestFinished } = useAppSelector((state) => state.TypingTestReducer)
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
  useEffect(() => {
    if (isTestStarted) {
      setInterv(setInterval(run, 100))
    }
  }, [isTestStarted])

  useEffect(() => {
    if (isTestFinished) {
      if (interv) clearInterval(interv)
      dispatch(setResultTime(time))
      setTime({ m: 0, s: 0, ms: 0 })
    }
  }, [isTestFinished, time, dispatch, interv])

  return (
    <div style={{ border: '1px solid #bbb', padding: '10px', borderRadius: '5px' }}>
      <span>Время: </span>
      <span>{time.m >= 10 ? time.m : `0${time.m}`}:</span>
      <span>{time.s >= 10 ? time.s : `0${time.s}`}:</span>
      <span>{time.ms}0</span>
    </div>
  )
}
export default Timer
