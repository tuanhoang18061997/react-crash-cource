import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({onCancle, onAddPost}) {
  const [enteredAuthor, setEnteredAuthor] = useState('');
  const [enteredBody, setEnteredBody] = useState('');

  function handlerAuthor(event) {
    setEnteredAuthor(event.target.value)
  }

  function handlerBody(event) {
    setEnteredBody(event.target.value)
  }

  function submitHandler(event) {
    event.preventDefault();
    const postdata = {
      author: enteredAuthor,
      body: enteredBody
    }
    onAddPost(postdata);
    onCancle();
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" required onChange={handlerAuthor}/>
      </p>
      <p>
        <label htmlFor="text">Text</label>
        <textarea id="text" required rows={3} onChange={handlerBody}/>
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancle}>Cancel</button>
        <button >Submit</button>
      </p>
    </form>
  );
}

export default NewPost;