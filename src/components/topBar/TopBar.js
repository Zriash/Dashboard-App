import React from 'react';
import classes from './TopBar.module.css';
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const TopBar = () => {
  const history = useHistory();

  const viewUser = () => {
    history.push('/Users/4');
  };

  return (
    <div className={classes.topbar}>
      <div className={classes.topbarWrapper}>
        <div className={classes.topLeft}>
          <span className={classes.logo}>Shopim-Mania</span>
        </div>
        <div className={classes.topRight}>
          <div className={classes.topbarIconContainer}>
            <NotificationsNone className={classes.icon} />
            <span className={classes.topIconBadge}>2</span>
          </div>
          <div className={classes.topbarIconContainer}>
            <Language className={classes.icon} />
          </div>
          <div className={classes.topbarIconContainer}>
            <Settings className={classes.icon} />
          </div>
          <img
            onClick={viewUser}
            className={classes.topAvatar}
            alt='current user avatar'
            src='https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
