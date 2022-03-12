import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import React, { useEffect, useState } from 'react'
import { TEXT_TEMPLATES } from '../../../../constants/textTemplates'
import { Container, Paper } from '@mui/material'

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
        height: '240px',
        margin: '26px auto',
        padding: '20px',
      }}
    >
      <Container maxWidth='sm'>
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
      </Container>
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
