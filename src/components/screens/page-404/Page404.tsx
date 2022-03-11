import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import React from 'react'
import Page404Image from 'assets/page-404.png'

const useStyles = makeStyles({
  root: {
    marginTop: '60px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
    color: '#777',
  },
  image: {
    width: '500px',
  },
})

const Page404 = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography className={classes.title} variant='h3'>
        Страница не нaйдена
      </Typography>
      <img className={classes.image} src={Page404Image} alt='Page not found' />
    </div>
  )
}

export default Page404
