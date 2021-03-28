import MyPosts from './MyPosts/MyPosts';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import profile from './Profile.module.css';

const Profile = (props) => {

  return (
    <div>
        <PersonalInfo />
        <MyPosts postsList = {props.postsList}/>
    </div>
  );
};

export default Profile;