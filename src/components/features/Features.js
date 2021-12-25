import React from 'react';
import classes from './Features.module.css';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';

const Features = () => {
  return (
    <div className={classes.features}>
      <div className={classes.item}>
        <span className={classes.title}>Revanue</span>
        <div className={classes.moneyContainer}>
          <span className={classes.money}>$2,415</span>
          <span className={classes.moneyRate}>
            -11.4 <ArrowDownward className={classes.downIcon} />
          </span>
        </div>
        <span className={classes.sub}>Compared to last month</span>
      </div>
      <div className={classes.item}>
        <span className={classes.title}>Sales</span>
        <div className={classes.moneyContainer}>
          <span className={classes.money}>$4,415</span>
          <span className={classes.moneyRate}>
            -1.4 <ArrowDownward className={classes.downIcon} />
          </span>
        </div>
        <span className={classes.sub}>Compared to last month</span>
      </div>
      <div className={classes.item}>
        <span className={classes.title}>Cost</span>
        <div className={classes.moneyContainer}>
          <span className={classes.money}>$2,225</span>
          <span className={classes.moneyRate}>
            2.4 <ArrowUpward className={classes.upIcon} />
          </span>
        </div>
        <span className={classes.sub}>Compared to last month</span>
      </div>
    </div>
  );
};

export default Features;
