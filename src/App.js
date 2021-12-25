import SideBar from './components/sideBar/SideBar';
import TopBar from './components/topBar/TopBar';
import classes from './App.module.css';
import HomePage from './pages/homePage/HomePage';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import UserList from './pages/userList/UserList';
import { ChartData } from './Dummy_Data';
import UserEditPage from './pages/userEditPage/UserEditPage';
import NewUser from './pages/new-userPage/NewUser';

function App() {
  return (
    <>
      <TopBar />
      <div className={classes.container}>
        <SideBar />
        <Switch>
          <Route path='/' exact>
            <Redirect to='/Home' />
          </Route>
          <Route path='/Home'>
            <HomePage userData={ChartData} />
          </Route>
          <Route path='/Users' exact>
            <UserList />
          </Route>
          <Route path='/new-user'>
            <NewUser />
          </Route>
          <Route path={'/Users/:userId'}>
            <UserEditPage />
          </Route>
          <Route path='*'>
            <div className={classes.dlt}>{useLocation().pathname}</div>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
