import React from 'react';
import classes from './SubTitle.module.css';

const SubTitle = (props) => {
  return (
    <div className={classes.sidebarMenu}>
      <h3 className={classes.sidebarTitle}>{props.title}</h3>
      <ul className={classes.sidebarList}>{props.children}</ul>
    </div>
  );
};

export default SubTitle;
