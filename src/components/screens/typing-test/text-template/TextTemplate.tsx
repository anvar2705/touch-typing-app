import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import React, { useEffect, useState } from 'react'
import { Paper } from '@mui/material'
import { TEXT_TEMPLATES } from 'constants/textTemplates'
import Timer from 'components/screens/typing-test/text-template/timer/Timer'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { DEFAULT_USERNAME } from 'constants/constants'
import { setTextTemplate, setUsername } from 'store/reducers/TypingTestSlice'

const TextTemplate = () => {
  const [name, setName] = useState<string>(DEFAULT_USERNAME)
  const [templateId, setTemplateId] = useState('')
  const [text, setText] = useState('')
  const { isTestStarted } = useAppSelector((state) => state.TypingTestReducer)
  const dispatch = useAppDispatch()

  const onTextTemplateSelect = (event: React.SyntheticEvent, value: string) => {
    setTemplateId(value)
    dispatch(setTextTemplate(value))
  }

  useEffect(() => {
    let id: number
    if (templateId !== '') {
      id = Number(templateId.replace('Вариант ', ''))
      const [selectedTemplate] = TEXT_TEMPLATES.filter((item) => item.id === id)
      setText(selectedTemplate.value)
    }
  }, [templateId])

  return (
    <Paper
      elevation={4}
      sx={{
        width: '100%',
        height: '260px',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex' }}>
        <div style={{ width: '50%' }}>
          <TextField
            value={name}
            onFocus={() => {
              if (name === DEFAULT_USERNAME) setName('')
            }}
            onBlur={() => {
              if (name.length === 0) setName(DEFAULT_USERNAME)
            }}
            onChange={(event) => {
              setName(event.target.value)
              dispatch(setUsername(event.target.value))
            }}
            label='Введите имя'
            fullWidth
            size='small'
            sx={{ marginBottom: '10px' }}
            disabled={isTestStarted}
          />
          <Autocomplete
            id='text-template'
            options={TEXT_TEMPLATES.map((item) => `Вариант ${item.id}`)}
            onChange={onTextTemplateSelect}
            renderInput={(params) => <TextField {...params} label='Выберите тест' size='small' />}
            sx={{ marginBottom: '10px' }}
            disableClearable
            disabled={isTestStarted}
          />
        </div>
        <div style={{ fontSize: '22px', margin: '20px auto' }}>
          <Timer />
        </div>
      </div>
      <div
        style={{
          border: '1px solid rgb(180, 180, 180)',
          borderRadius: '5px',
          padding: '10px',
          height: '100px',
        }}
      >
        {text}
      </div>
    </Paper>
  )
}

export default TextTemplate
