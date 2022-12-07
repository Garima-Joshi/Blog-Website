import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
//Firebase imports
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

function PostDetail() {
  const [post, setPost] = useState({});
  const { postId } = useParams();

  useEffect(() => {
    //firebase get data
    const unsubscribe = onSnapshot(doc(db, 'posts', postId), (doc) => {
      setPost(doc.data());
    });
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>By :- {post.author}</p>
      <p id="post-content">{post.content}</p>
    </div>
  );
}
export default PostDetail;
