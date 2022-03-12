import React from 'react'
import Countdown from './count-down/CountDown'
import { Container } from '@mui/material'
import InputField from './input-field/InputField'
import { useAppSelector } from '../../../hooks/redux'

const TypingTest = () => {
  const { result, isTestFinished } = useAppSelector((state) => state.UIReducer)
  return (
    <Container maxWidth='lg'>
      <div
        style={{
          border: '1px solid black',
          borderRadius: '10px',
          padding: '16px 30px',
          marginTop: '30px',
        }}
      >
        Какие люди и без охраны! Это комок нервов. А шнурки тебе не погладить? А чего это вы в
        темноте сидите? Мы? Телевизор смотрим. Ну, ладно, ладно. Москва слезам не верит. Кажется,
        вечер перестает быть томным. Ну, все! Засосало мещанское болото! Не учите меня жить, лучше
        помогите материально! Все в Москву лезут, будто она резиновая. В сорок лет жизнь только
        начинается, это уж я теперь точно знаю. Иногда такую глупость услышишь, а оказывается -
        точка зрения.
      </div>
      <Countdown />
      <InputField />
      {isTestFinished ? <div>Результат: {result}</div> : null}
    </Container>
  )
}

export default TypingTest
