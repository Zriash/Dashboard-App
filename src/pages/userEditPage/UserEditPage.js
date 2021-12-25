import React from 'react';
import classes from './UserEditPage.module.css';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { rows } from '../../Dummy_Data';
import UserShow from '../../components/userShow/UserShow';
import UserEdit from '../../components/userEdit/UserEdit';

const UserEditPage = () => {
  const params = useParams();
  const history = useHistory();
  const creatNewUser = () => {
    history.push('/new-user')
  }
  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <h1 className={classes.title}>Edit User</h1>
        <button className={classes.btnCreate} onClick={creatNewUser}>Create</button>
      </div>
      <div className={classes.user}>
        <div className={classes.userShow}>
          <UserShow data={rows[params.userId - 1]} />
        </div>
        <div className={classes.userUpdate}>
          <UserEdit data={rows[params.userId - 1]}/>
        </div>
      </div>
    </div>
  );
};

export default UserEditPage;
