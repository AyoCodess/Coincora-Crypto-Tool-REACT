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
import BarChartIcon from '@mui/icons-material/BarChart';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GroupsIcon from '@mui/icons-material/Groups';
import TelegramIcon from '@mui/icons-material/Telegram';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import CachedIcon from '@mui/icons-material/Cached';
import Link from '@mui/material/Link';
import { Link as LinkR } from 'react-router-dom';
import NavBarButton from '../components/Buttons/NavBarButton';
import NavBarButtonSubGrayIcon from '../components/Buttons/NavBarButtonSubGrayIcon';
import LocalPoliceIcon from '@mui/icons-material/LocalPolice';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PsychologyIcon from '@mui/icons-material/Psychology';
// import StandardButtonReactRouter from '../components/Buttons/StandardButtonReactRouter';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

import btcFavicon from '../assets/other/btc-favicon7.jpeg';

const drawerWidth = 240;

function NavbarLayout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // - Nav Layout

  const mainNav = ['Telegram', 'Contact'];
  const mainNavIcons = [<TelegramIcon />, <GroupsIcon />, <MailIcon />];
  const mainNavLinks = ['https://t.me/coincora', 'mailto:ayo@ayoadesanya.com'];
  const targetBlank = ['_blank', '_blank'];

  const subNav = [];
  const subNavIcons = [];
  //   const subNavLinks = [];

  const drawer = (
    <div>
      <Toolbar />
      <List style={{ fontSize: '20px' }}>
        <NavBarButton
          to={'/coin-predict'}
          icon={<BarChartIcon />}
          text={'Coin Predict'}
          onClick={handleDrawerToggle}
        />
        <NavBarButton
          to={'/quick-predict'}
          icon={<CompareArrowsIcon />}
          text={'Quick Predict'}
          onClick={handleDrawerToggle}
        />
        <NavBarButton
          to={'/newbies'}
          icon={<NewReleasesIcon />}
          text={'For Newbies'}
          onClick={handleDrawerToggle}
        />
        <NavBarButton
          to={'/updates'}
          icon={<CachedIcon />}
          text={'Updates'}
          onClick={handleDrawerToggle}
        />
        <NavBarButton
          to={'/mission'}
          icon={<GroupsIcon />}
          text={'Mission'}
          onClick={handleDrawerToggle}
        />

        <NavBarButton
          to={'/feature-request-form'}
          icon={<AddCircleOutlineIcon />}
          text={'Feature Request'}
          onClick={handleDrawerToggle}
        />
        <NavBarButton
          to={'/knowledge-base'}
          icon={<PsychologyIcon />}
          text={'Knowledge Base'}
          onClick={handleDrawerToggle}
        />
      </List>
      <Divider />
      <List style={{ fontSize: '20px' }}>
        <NavBarButton
          to={'/support-me'}
          icon={<CardGiftcardIcon />}
          text={'Support Me'}
          onClick={handleDrawerToggle}
        />
        {/* // - Links with have URLS only */}
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
        <NavBarButtonSubGrayIcon
          to={'/legal'}
          icon={<LocalPoliceIcon />}
          text={'Legal'}
          className='text-gray-300 font-medium'
          onClick={handleDrawerToggle}
        />
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
        <Toolbar className='flex justify-between'>
          <Box
            component='img'
            sx={{ mr: 2, height: 30, display: { sm: 'none' } }}
            alt='Your logo.'
            src={btcFavicon}
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
          />

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
          {/* <StandardButtonReactRouter text={'Log In'} to={'/'} /> */}
          <Tippy
            className='position top-[-37px] left-[-10px]'
            arrow={false}
            content={<span>Coming soon</span>}>
            <button>Login</button>
          </Tippy>
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
