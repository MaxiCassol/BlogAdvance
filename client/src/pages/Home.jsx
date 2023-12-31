import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

//Anybody can access the blog and read, but only register users can write on it. 

const Home = () => {
  const [posts, setPosts] = useState([]);
  //pagination
  const [currentPage, setCurrentPage] = useState(1); // current page
  const postsPerPage = 5; // quantity per page

  const cat = useLocation().search

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`)
        setPosts(res.data.reverse());
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  
  //pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (    
    <div className="home">  
        <hr/>
      <div className="posts">        
        {currentPosts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              {post.img
              ? <img src={post.img} alt="img" />
              : <img src={`../upload/${post.img}`} alt="pic" />}
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{getText(post.desc)}</p>
              <Link to={`/post/${post.id}`}>              
              <button >Read More</button>
              </Link>
            </div>            
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Home;
