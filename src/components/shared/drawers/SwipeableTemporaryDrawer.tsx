import * as React from 'react'
import Box from '@mui/material/Box'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListItemButton from '@mui/material/ListItemButton'
import { MENU_DRAWER_ANCHOR, MENU_ITEMS } from '../../../constants/constants'

type TSwipeableTemporaryDrawerProps = {
  isOpenDrawer: boolean
  setIsOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

const SwipeableTemporaryDrawer: React.FC<TSwipeableTemporaryDrawerProps> = ({
  isOpenDrawer,
  setIsOpenDrawer,
}) => {
  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setIsOpenDrawer(open)
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {MENU_ITEMS.map((menuItem, index) => (
          <ListItemButton key={menuItem}>
            <ListItemText primary={menuItem} />
          </ListItemButton>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      <SwipeableDrawer
        anchor={MENU_DRAWER_ANCHOR}
        open={isOpenDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        {list()}
      </SwipeableDrawer>
    </div>
  )
}

export default SwipeableTemporaryDrawer
