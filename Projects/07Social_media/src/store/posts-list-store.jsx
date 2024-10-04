import { createContext } from "react";
import { useReducer } from "react";



export const PostList=createContext({
    postList:[],
    addPost:()=>{},
    addInitialPosts:()=>{},
    deletePost:()=>{},
});

const postListReducer=(currPostList,action)=>{
    let newPostList=currPostList;
    if(action.type==='DELETE_POST'){
        newPostList=currPostList.filter((post)=>{post.id !==action.payload.postId})
    }else if(action.type==='ADD_POST'){
        newPostList=[action.payload,...currPostList]
    }else if(action.type ==='ADD_INITIAL_POSTS'){
        newPostList=action.payload.products;
    }
    return newPostList;
} 

const PostListProvider=({children})=>{

const [postList,distpatchPostList]=useReducer(postListReducer, []);

const addPost=(userId,postTitle,postBody,reactions,tags)=>{
   distpatchPostList({
    type:'ADD_POST',
    payload:{
    id:Date.now(),
    title:postTitle,
    body:postBody,
    reaction:reactions,
    user:userId,
    tags:tags
    }
   })
}

const addInitialPosts=(products)=>{
    distpatchPostList({
     type:'ADD_INITIAL_POSTS',
     payload:{
       products,
     }
    })
 }

const deletePost=(postId)=>{
     distpatchPostList({
        type:'DELETE_POST',
        payload:{
            postId,
        },
     });
}

 return <PostList.Provider value={{postList, addPost, deletePost,addInitialPosts}}> 
           {children} 
        </PostList.Provider>
}

// const DEFAULT_POST_LIST =[{
//     id:1,
//     title:'Going to Mumbai',
//     body:'Hi Friends i am going to mumbai',
//     reaction:2,
//     user:'User-9',
//     tags:['vacation','mumbai','Enjoying']
// },
// {
//     id:2,
//     title:'Betch Complete',
//     body:'with full enjoy i completed my betch',
//     reaction:15,
//     user:'User-12',
//     tags:['Graduation','Unbelieveable','Enjoying']
// }
// ];

export default PostListProvider;