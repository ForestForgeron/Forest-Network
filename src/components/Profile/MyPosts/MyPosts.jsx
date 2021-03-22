import myPosts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <textarea
        name=""
        id=""
        cols="70"
        rows="5"
        placeholder="Your news..."
        className={myPosts.newPostField}
      >
       
      </textarea>
      <Post message="Hello world!" likesCount="15"/>
      <Post message="Feel the power of the youth!" likesCount="31" />
      <Post message="Dabu-di-dabu-dai" likesCount="17" />
    </div>
  );
};

export default MyPosts;