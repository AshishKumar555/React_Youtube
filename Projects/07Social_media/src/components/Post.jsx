import React from 'react';
import { MdDelete } from "react-icons/md";
import { useContext } from 'react';
import { PostList } from '../store/posts-list-store';

const Post = ({post}) => {
         const {deletePost} = useContext(PostList);
  return (
    <div>
      <div className="card post-card" style={{width: "30rem"}}>
   {/* <img src="..." className="card-img-top" alt="..."/> */}
  <div className="card-body">
    <h5 className="card-title">{post.title}
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
    onClick={()=>deletePost(post.id)}> 
    <MdDelete />
    </span>
    </h5>
    <p className="card-text">{post.description}</p>
    {post.tags.map((tag)=>( <span class="badge text-bg-primary hashtag " key={tag} >{tag}</span>))}
    
      <div className="alert alert-success reactions " role="alert">
       This post has been created by {post.rating} people !
      </div>
  </div>
</div>
    </div>
  );
}

export default Post;
