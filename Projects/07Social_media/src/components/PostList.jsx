import React from 'react';
import Post from './Post';
import { useEffect,useState } from 'react';
import { useContext } from 'react';
import { PostList as PostListData } from '../store/posts-list-store';
import WelcomeMessage from './WelcomeMessage';
import LoadingSpinner from './LoadingSpinner';

const PostList = () => {
  const {postList,addInitialPosts} = useContext(PostListData);
  const [fetching,setFetching]=useState(false);
  
  useEffect(()=>{
    setFetching(true);
    fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then((data)=>{
      addInitialPosts(data.products);
      setFetching(false);
    });
  },[])
    

  return (
    <div>
      {fetching && <LoadingSpinner/>}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      { !fetching && postList.map((post)=> (<Post key={post.id} post={post}/>))}
    </div>
  );
}

export default PostList;
