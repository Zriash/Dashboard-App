import React from 'react';
import classes from './UserShow.module.css';
import {
  Cake,
  FmdGoodOutlined,
  MailOutline,
  Person,
  PhoneAndroid,
} from '@mui/icons-material';

const UserShow = (props) => {
  return (
    <div>
      <div className={classes.item}>
        <div className={classes.userText}>
          <span className={classes.username}>{props.data.username}</span>
          <span className={classes.jobTitle}>{props.data.jobTitle}</span>
        </div>
        <img
          className={classes.userImg}
          alt={props.data.img.alt}
          src={props.data.img.src}
        />
      </div>
        <div className={classes.btmTitle}>Account Details</div>
      <div className={classes.itemBottem}>
        <div className={classes.infoDiv}>
          <Person className={classes.icon} />
          <span className={classes.infoTitle}>{props.data.username}</span>
        </div>
        <div className={classes.infoDiv}>
          <Cake className={classes.icon} />
          <span className={classes.infoTitle}>{props.data.date}</span>
        </div>
        <div className={classes.infoDiv}>
          <MailOutline className={classes.icon} />
          <span className={classes.infoTitle}>{props.data.email}</span>
        </div>
        <div className={classes.infoDiv}>
          <PhoneAndroid className={classes.icon} />
          <span className={classes.infoTitle}>+722 55-788129</span>
        </div>
        <div className={classes.infoDiv}>
          <FmdGoodOutlined className={classes.icon} />
          <span className={classes.infoTitle}>New York | USA</span>
        </div>
      </div>
    </div>
  );
};

export default UserShow;
