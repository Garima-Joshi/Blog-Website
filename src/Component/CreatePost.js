import { useFormInput } from '../hooks';
//Firebase imports
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
function CreatePost() {
  const title = useFormInput('');
  const content = useFormInput('');
  const author = useFormInput('');

  //Submit Function
  async function handleSubmit(e) {
    e.preventDefault();
    console.log('title', title);
    console.log('content', content);
    console.log('author', author);
    //firebase db
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        title: title.value,
        content: content.value,
        author: author.value,
        createdAt: new Date(),
      });

      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    for (let element of document.getElementsByTagName('input'))
      element.value = '';
    for (let element of document.getElementsByTagName('textarea'))
      element.value = '';
  }
  /********/
  return (
    <div className="create-post">
      <h1>Create Post</h1>
      <form>
        <div className="form-field">
          <label>Title</label>
          <input {...title} />
        </div>
        <div className="form-field">
          <label>Author</label>
          <input {...author} />
        </div>
        <div className="form-field">
          <label>Content</label>
          <textarea {...content}></textarea>
        </div>
        <button className="create-post-btn" onClick={handleSubmit}>
          Create Post
        </button>
      </form>
    </div>
  );
}
export default CreatePost;
