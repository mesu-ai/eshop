import './App.css';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Notfind from './pages/notfind/Notfind';
import Navbar from './components/shared/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        
        <Route path='/products' element={<Products/>}/>

        
        <Route exact path='/' element={<Home/>}/>
        <Route path='*' element={<Notfind/>}/>

        
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
