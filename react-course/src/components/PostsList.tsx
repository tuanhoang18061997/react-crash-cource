import classes from './PostsList.module.css'
import Post from "./Post";
import NewPost from './NewPost';
import { useState } from 'react';
import Modal from './Modal';

function PostsList({isPosting, onStopPosting}) {
  
  const [posts, setPosts] = useState([]);
  function addPosts(postData) {
    setPosts([postData, ...posts]);
  }
  return (
    <>
      {isPosting ?
      (
        <Modal onClose={onStopPosting}>
          <NewPost onCancle={onStopPosting} onAddPost={addPosts}/>
        </Modal>
      ) : false}
      <ul className={classes.posts}>
        {posts.length > 0 && posts.map((post) => <Post author={post.author} body={post.body} />)}
        {/* <Post author={enteredAuthor} body={enteredBody}/> */}
        {/* <Post author='Hoang em' body='ReactJS is awesome 123'/> */}
      </ul>
    </>
  )
} 
export default PostsList;