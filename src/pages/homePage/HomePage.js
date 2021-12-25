import React from 'react';
import Chart from '../../components/chart/Chart';
import WidgetM from '../../components/widgetM/WidgetM';
import WidgetL from '../../components/widgetL/WidgetL';
import Features from '../../components/features/Features';
import classes from './HomePage.module.css';

const HomePage = (props) => {
  return (
    <div className={classes.home}>
      <Features />
      <Chart userData={props.userData} title='User Analytics' grid />
      <div className={classes.widgets}>
          <WidgetM />
          <WidgetL />
      </div>
    </div>
  );
};

export default HomePage;
