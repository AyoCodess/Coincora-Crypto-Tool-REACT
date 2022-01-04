import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Link from '@mui/material/Link';
import { Link as LinkR } from 'react-router-dom';

function NavBarButtonSub({ icon, text, to }) {
  return (
    <LinkR to={to}>
      <Link underline={'none'} color={'none'}>
        <ListItem button>
          <ListItemIcon style={{ color: 'lightgray' }}>{icon}</ListItemIcon>
          <div className='font-medium text-gray-400'>{text}</div>
        </ListItem>
      </Link>
    </LinkR>
  );
}

export default NavBarButtonSub;
