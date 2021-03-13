import post from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className={post.item}>
        <img
          src="https://shapka-youtube.ru/wp-content/uploads/2019/11/wolf-v1.jpg"
          alt="post suthor avatar"
          className={post.avatar}
        />
        <div>
          {props.message}
        </div>
        
        <span>
          likes:
        </span>
        <span>
          {props.likesCount}
        </span>
      </div>
      
    </div>
  );
};

export default Post;