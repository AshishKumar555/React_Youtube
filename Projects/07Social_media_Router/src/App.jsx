
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import CreatePosts from './components/CreatePosts'
import PostList from './components/PostList'
import { useState } from 'react'
import PostListProvider from './store/posts-list-store'
import { Route,Routes } from 'react-router-dom'

function App() {
  
  const [SelectedTab,setSelectedTab]=useState('Home');

  return (
    
    <PostListProvider>
      <div className='app-container'>
        <Sidebar SelectedTab={SelectedTab} setSelectedTab={setSelectedTab}></Sidebar>
        <div className='content'>
        <Header></Header>
        {/* {SelectedTab==='Home'? <PostList></PostList> : <CreatePosts></CreatePosts>} */}
        <Routes>
          <Route path='/' element={<PostList></PostList>}></Route>
          <Route path='/createPosts' element={<CreatePosts></CreatePosts>}></Route>
          <Route path='*' element={<div>The page is not Found .</div>}></Route>
        </Routes>
        
        <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
    
  )
}

export default App
