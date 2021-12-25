import React from 'react';
import classes from './NewUser.module.css';
import { useState } from 'react';
import { Upload } from '@mui/icons-material';

const NewUser = () => {
  const [isHovered, setIsHovered] = useState(false);
  
    const submitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <div className={classes.page}>
      <h1 className={classes.title}>Add New User</h1>
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
              placeholder='username'
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
              placeholder='email'
            />
          </div>
          <div className={classes.inputDiv}>
            <label className={classes.label} htmlFor='phone-number'>
              Phone-Number:
            </label>
            <input className={classes.input} type='text' id='phone-number' placeholder='enter phone number' />
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
          <div className={classes.radioDiv}>
            <label className={classes.radioLabel}>Gender:</label>
            <div className={classes.radioBtns}>
              <div>
                <input type='radio' name='gender' id='male' value='male' />
                <label className={classes.label} htmlFor='male'>
                  Male
                </label>
              </div>
              <div>
                <input type='radio' name='gender' id='female' value='female' />
                <label className={classes.label} htmlFor='female'>
                  Female
                </label>
              </div>
              <div>
                <input type='radio' name='gender' id='other' value='other' />
                <label className={classes.label} htmlFor='other'>
                  Other
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.rightDiv}>
          <div className={classes.uploadDiv}>
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
            <img
              className={classes.img}
              src='https://louisville.edu/history/images/noimage.jpg/image'
              alt='no profile photo yet'
            />
            <input
              className={classes.imgUpload}
              type='file'
              id='upload image'
            />
          </div>
          <div className={classes.btnSubmitDiv}>
            <button onClick={submitHandler} className={classes.btnSubmit}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewUser;
