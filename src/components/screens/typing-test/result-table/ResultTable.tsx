import React from 'react'
import { useAppSelector } from 'hooks/redux'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

const ResultTable = () => {
  const { resultTable } = useAppSelector((state) => state.TypingTestReducer)
  if (resultTable.length === 0) return null
  return (
    <>
      <Typography variant='h6' textAlign='center' paragraph sx={{ marginTop: '20px' }}>
        Таблица результатов
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Имя</TableCell>
              <TableCell align='right'>Текст</TableCell>
              <TableCell align='right'>Время</TableCell>
              <TableCell align='right'>Результат</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {resultTable.map((row) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.template}</TableCell>
                <TableCell align='right'>
                  {row.time.m} мин {row.time.s} сек
                </TableCell>
                <TableCell align='right'>{row.result} знаков/мин</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default ResultTable
