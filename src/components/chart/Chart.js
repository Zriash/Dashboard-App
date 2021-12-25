import React from 'react';
import classes from './Chart.module.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Chart = (props) => {
  return (
    <div className={classes.chart}>
      <h3 className={classes.chartTitle}>{props.title}</h3>
      <ResponsiveContainer width='100%' aspect={4 / 1}>
        <LineChart data={props.userData}>
          <XAxis dataKey={'name'} stroke='#1b2a41' />
          <YAxis stroke='#1b2a41' />
          <Line type='monotone' dataKey='Active User' stroke='#1982c4' />
          <Tooltip />
          {props.grid && <CartesianGrid stroke='#e0dfdf' />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
