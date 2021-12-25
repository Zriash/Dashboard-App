import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classes from './LiLink.module.css';

const LiLink = (props) => {
  const location = useLocation();
  const name = props.name;
  const path = `/${name}`;
  return (
    <Link className={classes.link} to={path}>
      <li
        className={`${classes.sidebarListItem} ${
          location.pathname === path ? classes.active : ''
        }`}
      >
        <props.icon className={classes.sidebarIcon} />
        {name}
      </li>
    </Link>
  );
};

export default LiLink;
