import React from 'react'

interface TimerDisplayProps {
  time: {
    m: number
    s: number
    ms: number
  }
}

const TimerDisplay = ({ time }: TimerDisplayProps) => {
  return (
    <div style={{ textAlign: 'center', fontSize: '20px' }}>
      <span>{time.m >= 10 ? time.m : `0${time.m}`}:</span>
      <span>{time.s >= 10 ? time.s : `0${time.s}`}:</span>
      <span>{time.ms}0</span>
    </div>
  )
}

export default TimerDisplay
