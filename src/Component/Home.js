import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Firebase imports
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import CreatePost from './CreatePost';

function Home() {
  const [posts, setPosts] = useState([]);

  //firebase get data
  useEffect(() => {
    /******READS DATA (WITHOUT REALTIME UPDATE FUNCTIONALITY) **************/
    //   getDocs(collection(db,'posts')).then((response)=>{
    //     const post = response.docs.map((doc) => {
    //     return {
    //       id: doc.id,
    //       ...doc.data(),
    //     };
    //   });
    //   setPosts(post);})

    /*********READS DATA( WITH REALTIME UPDATE FUNCTIONALITY)*/
    const unsubscribe = onSnapshot(collection(db, 'posts'), (snapshot) => {
      const post = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      setPosts(post);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="home">
      <h1>Tech Blog</h1>
      <div id="blog-by">Contributors</div>
      {posts.map((post, index) => {
        return (
          <div className="post" key={`post-${index}`}>
            <Link to={`/post/${post.id}`}>
              <h3>{post.title}</h3>
            </Link>
            <p>By :- {post.author}</p>
          </div>
        );
      })}
      <CreatePost />
    </div>
  );
}
export default Home;
