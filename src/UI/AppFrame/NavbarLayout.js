import './NavbarLayout.scss';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import BarChartIcon from '@mui/icons-material/BarChart';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GroupsIcon from '@mui/icons-material/Groups';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import WidgetsIcon from '@mui/icons-material/Widgets';
import TelegramIcon from '@mui/icons-material/Telegram';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import Link from '@mui/material/Link';
import { Link as LinkR } from 'react-router-dom';
import NavBarButton from '../../components/Buttons/NavBarButton';

const drawerWidth = 240;

function NavbarLayout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // - Nav Layout

  const mainNav = ['About', 'Telegram', 'Contact'];
  const mainNavIcons = [<GroupsIcon />, <TelegramIcon />, <MailIcon />];
  const mainNavLinks = [
    'mailto:ayo@ayoadesanya.com',
    'https://github.com/sponsors/AyoCodess?o=esb',
    'https://t.me/coincora',
  ];
  const targetBlank = ['_blank', '_blank', '_blank'];

  const subNav = [];
  const subNavIcons = [];
  //   const subNavLinks = [];

  const drawer = (
    <div>
      <Toolbar />
      <ListItem>
        {' '}
        <ArrowDropDownCircleIcon className='hover:text-blue-500 text-gray-400 transition ease-in-out duration-700' />
      </ListItem>

      <List style={{ fontSize: '20px' }}>
        <NavBarButton
          to={'/coin-forecast'}
          icon={<BarChartIcon />}
          text={'Coin Forecast'}
        />
        <NavBarButton
          to={'/newbies'}
          icon={<NewReleasesIcon />}
          text={'For Newbies'}
        />

        {mainNav.map((text, index) => (
          <Link
            underline={'none'}
            href={`${mainNavLinks[index]}`}
            target={targetBlank[index]}
            rel='noopener'
            color={'none'}
            key={index}>
            <ListItem button>
              <ListItemIcon style={{ color: '#0753FF' }}>
                {mainNavIcons[index]}
              </ListItemIcon>
              <span className='font-medium'>{text}</span>
            </ListItem>
          </Link>
        ))}
        <NavBarButton
          to={'/feature-request-form'}
          icon={<AddCircleOutlineIcon />}
          text={'Feature Request'}
        />
      </List>
      <Divider />
      <List>
        <div className='mx-auto w-auto'>
          <iframe
            className='mx-auto mt-2'
            src='https://www.github.com/sponsors/AyoCodess/button'
            title='Sponsor AyoCodess'
            height='35'
            width='116'
            style={{ border: '0' }}></iframe>
        </div>
        {subNav.map((text, index) => (
          <ListItem button key={text}>
            <Link>
              <ListItemIcon className='text-appBlue'>
                {subNavIcons[index]}
              </ListItemIcon>
            </Link>
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
          <Typography
            className='hover:text-gray-400 transition ease-in-out duration-700'
            variant='h5'
            noWrap
            component='div'
            style={{ marginTop: '4px' }}>
            <LinkR to='/'>
              <span style={{ fontSize: '30px' }}>Coincora</span>
            </LinkR>
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
