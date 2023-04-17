import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import "./App.css"
import { useState,useEffect} from 'react';
import axios from 'axios';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Form from './components/Form';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom'

function App() {
//хранения данных туров
const [tyrs, setTyrs] = useState([])

useEffect (()=>{
  async function axiosData(){
    const tyrsData = await axios.get('https://63e2333fad0093bf29ca0c0e.mockapi.io/tyrs')
    setTyrs(tyrsData.data)
  }
  axiosData();
},[])

return (
    
    <div>
     
     <Router>
     <Header/> 
      <Routes>
        <Route path='/favorites'
                    element={
                        <Favorites />
                    }
                /> 
    

    <Route path='/'
                    element={
                        <Home
                        item={tyrs}/>
                    }
                />

    <Route path='/form'
                element={
                        <Form/>
                    }
                />


      </Routes>
      </Router> 
   
    
      <Footer/>
     </div>

    
  );
}

export default App;
