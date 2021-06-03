import { playlistAllHost, shutdownHost } from 'utils/Hosts'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AddDialogButton from 'components/Add'
import RemoveAll from 'components/RemoveAll'
import SettingsDialog from 'components/Settings'
import AboutDialog from 'components/About'
import UploadDialog from 'components/Upload'
import {
  CreditCard as CreditCardIcon,
  List as ListIcon,
  PowerSettingsNew as PowerSettingsNewIcon,
} from '@material-ui/icons'
import List from '@material-ui/core/List'

import { AppSidebarStyle } from './style'

export default function Sidebar({ isDrawerOpen, setIsDonationDialogOpen }) {
  return (
    <AppSidebarStyle isDrawerOpen={isDrawerOpen}>
      <List>
        <AddDialogButton />
        <UploadDialog />
        <RemoveAll />
        <ListItem button component='a' key='Playlist all torrents' target='_blank' href={playlistAllHost()}>
          <ListItemIcon>
            <ListIcon />
          </ListItemIcon>
          <ListItemText primary='Playlist all torrents' />
        </ListItem>
      </List>

      <Divider />

      <List>
        <SettingsDialog />
        <AboutDialog />
        <ListItem button key='Close server' onClick={() => fetch(shutdownHost())}>
          <ListItemIcon>
            <PowerSettingsNewIcon />
          </ListItemIcon>
          <ListItemText primary='Close server' />
        </ListItem>
      </List>

      <Divider />

      <List>
        <ListItem button key='Donation' onClick={() => setIsDonationDialogOpen(true)}>
          <ListItemIcon>
            <CreditCardIcon />
          </ListItemIcon>
          <ListItemText primary='Donate' />
        </ListItem>
      </List>
    </AppSidebarStyle>
  )
}