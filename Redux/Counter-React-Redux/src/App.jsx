import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Header from './componets/Header';
import DisplayCounter from './componets/DisplayCounter';
import Container from './componets/Container';
import Controls from './componets/Controls';
import { useSelector } from 'react-redux';
import PrivacyMessage from './componets/PrivacyMessage';

function App() {
  
const privacy=useSelector(store=>store.privacy)

  return (
  
      <center className="px-4 py-5 my-5 text-center">
        <Container>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMessage/>:<DisplayCounter/>}
          
          <Controls></Controls>
        </div>
        </Container>
      </center>
    
  )
}

export default App
