import { Upload } from '@mui/icons-material';
import React, { useState } from 'react';
import classes from './UserEdit.module.css';

const UserEdit = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <span className={classes.title}>Edit</span>
      <form className={classes.form}>
        <div className={classes.leftDiv}>
          <div className={classes.inputDiv}>
            <label className={classes.label} htmlFor='username'>
              Username:
            </label>
            <input
              className={classes.input}
              type='text'
              id='username'
              placeholder={props.data.username}
            />
          </div>
          <div className={classes.inputDiv}>
            <label className={classes.label} htmlFor='date'>
              Date:
            </label>
            <input className={classes.input} type='date' id='date' />
          </div>
          <div className={classes.inputDiv}>
            <label className={classes.label} htmlFor='email'>
              email:
            </label>
            <input
              className={classes.input}
              type='email'
              id='email'
              placeholder={props.data.email}
            />
          </div>
          <div className={classes.inputDiv}>
            <label className={classes.label} htmlFor='phone-number'>
              Phone-Number:
            </label>
            <input
              className={classes.input}
              type='text'
              id='phone-number'
              placeholder={'+722 55-788129'}
            />
          </div>
          <div className={classes.inputDiv}>
            <label className={classes.label} htmlFor='address'>
              Address:
            </label>
            <input
              className={classes.input}
              type='address'
              id='address'
              placeholder='New York | USA'
            />
          </div>
        </div>

        <div className={classes.rightDiv}>
          <div className={classes.uploadDiv}>
            <img
              className={classes.img}
              src={props.data.img.src}
              alt={props.data.img.alt}
            />
            <label
              className={classes.uploadLabel}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              htmlFor='upload image'
            >
              <Upload
                className={`${classes.iconUpload} ${
                  isHovered ? classes.bump : ''
                }`}
              />
              <span className={classes.labelTxt}>
                Upload
                <br />
                New
                <br />
                Photo
              </span>
            </label>
            <input
              className={classes.imgUpload}
              type='file'
              id='upload image'
            />
          </div>
          <button onClick={submitHandler} className={classes.btnSubmit}>
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default UserEdit;
