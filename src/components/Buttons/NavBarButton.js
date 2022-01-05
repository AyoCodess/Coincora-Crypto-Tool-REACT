import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Link from '@mui/material/Link';
import { Link as LinkR } from 'react-router-dom';

function NavBarButton({ icon, text, to, onClick }) {
  return (
    <LinkR to={to} onClick={onClick}>
      <Link underline={'none'} color={'none'}>
        <ListItem button>
          <ListItemIcon style={{ color: '#0753FF' }}>{icon}</ListItemIcon>
          <div className='font-medium'>{text}</div>
        </ListItem>
      </Link>
    </LinkR>
  );
}

export default NavBarButton;
