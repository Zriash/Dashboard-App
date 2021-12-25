import React from 'react';
import classes from './WidgetMItem.module.css';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Link } from 'react-router-dom';

const WidgetMItem = (props) => {
  return (
    <li className={classes.item}>
      <img
        className={classes.userImg}
        alt={props.data.img.alt}
        src={props.data.img.src}
      />
      <div className={classes.userText}>
        <span className={classes.username}>{props.data.username}</span>
        <span className={classes.jobTitle}>{props.data.jobTitle}</span>
      </div>
      <Link className={classes.btnLink} to={`/Users/${props.data.id}`}>
        <button className={classes.btn}>
          <VisibilityOutlinedIcon className={classes.btnIcon} />
          Display
        </button>
      </Link>
    </li>
  );
};

export default WidgetMItem;
