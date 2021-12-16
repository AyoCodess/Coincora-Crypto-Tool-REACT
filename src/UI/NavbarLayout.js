import './NavbarLayout.scss';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CreditScore } from '@mui/icons-material';
import GroupsIcon from '@mui/icons-material/Groups';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import WidgetsIcon from '@mui/icons-material/Widgets';

const drawerWidth = 240;

function NavbarLayout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // - Nav Layout

  const mainNav = ['Contact Us', 'About Us'];
  const subNav = ['Support Us'];
  const mainNavIcons = [<MailIcon />, <GroupsIcon />];
  const subNavIcons = [<CreditScore />];

  const drawer = (
    <div>
      <Toolbar />
      <ListItem>
        {' '}
        <ArrowDropDownCircleIcon style={{ color: 'lightgray' }} />
      </ListItem>

      <List>
        {mainNav.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon style={{ color: '#0753FF' }}>
              {mainNavIcons[index]}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {subNav.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon style={{ color: '#0753FF' }}>
              {subNavIcons[index]}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        style={{ backgroundColor: 'white', color: '#0753FF' }}
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}>
        <Toolbar>
          <WidgetsIcon
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}>
            <MenuIcon />
          </WidgetsIcon>
          <Typography variant='h5' noWrap component='div'>
            Coincora
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label='mailbox folders'>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}>
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open>
          {drawer}
        </Drawer>
      </Box>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}>
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

export default NavbarLayout;
