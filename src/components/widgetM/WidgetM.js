import React from 'react';
import classes from './WidgetM.module.css';
import { rows } from '../../Dummy_Data';
import WidgetMItem from './widgetMItem/WidgetMItem';

const WidgetM = () => {
  return (
    <div className={classes.widgetM}>
      <span className={classes.title}>New Members</span>
      <ul className={classes.list}>
        <WidgetMItem data={rows[4]} />
        <WidgetMItem data={rows[3]} />
        <WidgetMItem data={rows[2]} />
        <WidgetMItem data={rows[1]} />
      </ul>
    </div>
  );
};

export default WidgetM;
