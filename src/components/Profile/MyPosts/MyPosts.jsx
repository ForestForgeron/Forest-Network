import myPosts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  

  const postsItems = props.postsList.map(
    post => <Post message={post.post} likesCount={post.likesCount} />
  );

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
      
      { postsItems }
    </div>
  );
};

export default MyPosts;