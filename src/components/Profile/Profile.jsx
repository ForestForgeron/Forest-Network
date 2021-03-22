import MyPosts from './MyPosts/MyPosts';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import profile from './Profile.module.css';

const Profile = () => {
  return (
    <div>
        

        <PersonalInfo />
        
        <MyPosts />
      </div>
  );
};

export default Profile;