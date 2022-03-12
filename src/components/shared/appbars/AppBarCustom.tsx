import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import SwipeableTemporaryDrawer from '../drawers/SwipeableTemporaryDrawer'

const ButtonAppBar = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)

  const onClick = () => {
    setIsOpenDrawer(true)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              onClick={onClick}
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h5' component='div' sx={{ flexGrow: 1, textAlign: 'center' }}>
              Touch Typing App
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <SwipeableTemporaryDrawer isOpenDrawer={isOpenDrawer} setIsOpenDrawer={setIsOpenDrawer} />
    </>
  )
}
export default ButtonAppBar
