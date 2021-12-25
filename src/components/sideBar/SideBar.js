import React from 'react';
import classes from './SideBar.module.css';
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PersonOutlined,
  Storefront,
  AttachMoney,
  BarChart,
  EmailOutlined,
  FeedOutlined,
  MessageOutlined,
  WorkOutlineOutlined,
  ReportTwoTone,
} from '@mui/icons-material';
import LiLink from './liLink/LiLink';
import SubTitle from './sideBarSubTitle/SubTitle';

const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebarWrapper}>
        <SubTitle title='Dashboard'>
          <LiLink icon={LineStyle} name='Home' />
          <LiLink icon={Timeline} name='Analytics' />
          <LiLink icon={TrendingUp} name='Sales' />
        </SubTitle>
        <SubTitle title='Quick Menu'>
          <LiLink icon={PersonOutlined} name='Users' />
          <LiLink icon={Storefront} name='Products' />
          <LiLink icon={AttachMoney} name='Transactions' />
          <LiLink icon={BarChart} name='Statistics' />
        </SubTitle>
        <SubTitle title='Notifications'>
          <LiLink icon={EmailOutlined} name='Mail' />
          <LiLink icon={FeedOutlined} name='Feedback' />
          <LiLink icon={MessageOutlined} name='Messages' />
        </SubTitle>
        <SubTitle title='Staff'>
          <LiLink icon={WorkOutlineOutlined} name='Manage' />
          <LiLink icon={Timeline} name='Performance' />
          <LiLink icon={ReportTwoTone} name='Reports' />
        </SubTitle>
      </div>
    </div>
  );
};

export default SideBar;
