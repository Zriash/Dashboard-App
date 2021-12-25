import React from 'react';
import classes from './WidgetL.module.css';
import WidgetLItem from './widgetLItem/WidgetLItem';
import { rows } from '../../Dummy_Data';

const WidgetL = () => {
  const Button = ({ type }) => {
    return (
      <button className={`${classes.btn} ${classes[type]}`}>{type}</button>
    );
  };

  return (
    <div className={classes.widgetL}>
      <h3 className={classes.title}>Latest Transactions</h3>
      <table className={classes.table}>
        <thead>
          <tr className={classes.tableRow}>
            <th className={classes.tableHead}>Customer</th>
            <th className={classes.tableHead}>Date</th>
            <th className={classes.tableHead}>Amount</th>
            <th className={classes.tableHead}>Status</th>
          </tr>
        </thead>
        <tbody>
          <WidgetLItem data={rows[0]}>
            <Button type='Approved' />
          </WidgetLItem>
          <WidgetLItem data={rows[1]}>
            <Button type='Declined' />
          </WidgetLItem>
          <WidgetLItem data={rows[2]}>
            <Button type='Pending' />
          </WidgetLItem>
          <WidgetLItem data={rows[3]}>
            <Button type='Approved' />
          </WidgetLItem>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetL;
