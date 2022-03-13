import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import React, { useEffect, useState } from 'react'
import { Paper } from '@mui/material'
import { TEXT_TEMPLATES } from 'constants/textTemplates'
import Timer from 'components/screens/typing-test/timer/Timer'

const TextTemplate = () => {
  const [name, setName] = useState('')
  const [templateId, setTemplateId] = useState('')
  const [text, setText] = useState('')

  const onTextTemplateSelect = (event: React.SyntheticEvent, value: string) => {
    setTemplateId(value)
  }

  useEffect(() => {
    let id: number
    if (templateId !== '') {
      id = Number(templateId.replace('Test ', ''))
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
        margin: '26px auto',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ display: 'flex' }}>
        <div style={{ width: '50%' }}>
          <TextField
            value={name}
            onChange={(event) => {
              setName(event.target.value)
            }}
            label='Введите имя'
            fullWidth
            size='small'
            sx={{ marginBottom: '10px' }}
          />
          <Autocomplete
            disableClearable
            id='text-template'
            options={TEXT_TEMPLATES.map((item) => `Test ${item.id}`)}
            onChange={onTextTemplateSelect}
            renderInput={(params) => <TextField {...params} label='Выберите тест' size='small' />}
            sx={{ marginBottom: '10px' }}
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
