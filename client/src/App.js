import './App.css';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import DogCreate from './components/DogCreate';
import Detail from './components/Detail';
import Login from './components/Login';


function App() {
  return (
    
      <div className="App">
        <Routes> 
          <Route path="/" element={<Login />} />
          <Route exact path='/landingpage' element={<LandingPage/>} />
          <Route exact path='/home' element={<Home/>} />
          <Route path='/dogs' element={<DogCreate/>} />
          <Route path='/home/:id' element={<Detail/>} />
        </Routes>
      </div>
    
  );
}

export default App;