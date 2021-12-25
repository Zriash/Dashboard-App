import React from 'react';
import classes from './WidgetLItem.module.css';

const WidgetLItem = (props) => {
  return (
    <tr className={classes.tableRow}>
      <td className={classes.tableCellUser}>
        <img
          className={classes.tableImg}
          alt={props.data.img.alt}
          src={props.data.img.src}
        />
        <span className={classes.tableUsername}>{props.data.username}</span>
      </td>
      <td className={classes.tableCellDate}>{props.data.date}</td>
      <td className={classes.tableCellAmount}>{props.data.amount}</td>
      <td className={classes.tableCellStats}>{props.children}</td>
    </tr>
  );
};

export default WidgetLItem;
