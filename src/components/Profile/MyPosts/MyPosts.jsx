import myPosts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  const postsList = [
    {
      id: 1,
      post: 'Hello world!',
      likesCount: 15,
    },

    {
      id: 2,
      post: 'Feel the power of the youth!',
      likesCount: 32,
    },

    {
      id: 3,
      post: 'Dabu-di-dabu-dai',
      likesCount: 10,
    },

  ];

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
      <Post message={postsList[0].post} likesCount={postsList[0].likesCount} />
      <Post message={postsList[1].post} likesCount={postsList[1].likesCount} />
      <Post message={postsList[2].post} likesCount={postsList[2].likesCount} />
      
    </div>
  );
};

export default MyPosts;