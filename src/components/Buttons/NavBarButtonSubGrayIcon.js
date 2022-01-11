import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Link from '@mui/material/Link';
import { Link as LinkR } from 'react-router-dom';

function NavBarButtonSub({ icon, text, to, onClick, className }) {
  return (
    <LinkR to={to} onClick={onClick}>
      <Link underline={'none'} color={'none'}>
        <ListItem button>
          <ListItemIcon style={{ color: 'lightgray' }}>{icon}</ListItemIcon>
          <div className={className}>{text}</div>
        </ListItem>
      </Link>
    </LinkR>
  );
}

export default NavBarButtonSub;
