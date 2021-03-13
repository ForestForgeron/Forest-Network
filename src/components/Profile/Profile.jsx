import MyPosts from './MyPosts/MyPosts';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import profile from './Profile.module.css';

const Profile = () => {
  return (
    <div className={profile.profile}>
        <div>
          <img
            src="https://static.brusselsairlines.com/_img/destinationPage2/Italy/Venice/Venice-canal-grande.png"
            alt="venice"
            className={profile.profile__img}
          />
        </div>

        <PersonalInfo />
        
        <MyPosts />
      </div>
  );
};

export default Profile;