import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import SwipeableTemporaryDrawer from 'components/shared/drawers/SwipeableTemporaryDrawer'

const ButtonAppBar = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false)

  const onClick = () => {
    setIsOpenDrawer(true)
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position='absolute'
          sx={{ height: 40, justifyContent: 'center', top: 0, left: 0, zIndex: 10 }}
        >
          <Toolbar>
            <IconButton
              onClick={onClick}
              size='small'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography component='div' sx={{ marginLeft: '20px' }}>
              TypingLand
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <SwipeableTemporaryDrawer isOpenDrawer={isOpenDrawer} setIsOpenDrawer={setIsOpenDrawer} />
    </>
  )
}
export default ButtonAppBar
