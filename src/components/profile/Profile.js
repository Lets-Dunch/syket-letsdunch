import React from 'react';
import './Profile.css';
import ProfileImage from '../../img/profile.jpg';
import EditIcon from '@material-ui/icons/Edit';

const Profile = () => {
  return (
    <div className="profile">
      <div className="container-fluid">
        <div className="row my-5">
          <div className="col-md-8">
            <h3 className="profile__name">Welcome Ganesh!</h3>

            <div className="profile__image--box">
              <img src={ProfileImage} alt="" className="profile__image" />
              <div className="edit-box">
                <label htmlFor="image">
                  <EditIcon className="image-edit" />
                </label>
                <input
                  className="file-input"
                  type="file"
                  name="image"
                  id="image"
                />
              </div>
            </div>

            <div className="form-box">
              <form className="profile-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" name="firstName" id="firstName" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" name="lastName" id="lastName" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            dolores quo reiciendis praesentium voluptas in, eum laborum odit
            veritatis cum id beatae temporibus reprehenderit! Necessitatibus
            esse quas debitis eligendi atque.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
