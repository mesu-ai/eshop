import './App.css';
import { useState } from 'react';
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Notfind from './pages/notfind/Notfind';
import Navbar from './components/shared/navbar/Navbar';
import Footer from './components/shared/footer/Footer';
import ProductDetails from './pages/products/productDetails/ProductDetails';
import AuthProvider from './contex/AuthProvider';
import AuthModal from './components/authentication/AuthModal';
import UserLogin from './components/authentication/userlogin/UserLogin';
import PrivateRoute from './components/authentication/privateroute/PrivateRoute';
import ProductOrder from './pages/products/productOrder/ProductOrder';

// import AuthModal from './components/authentication/AuthModal';
// import UserLogin from './components/authentication/userlogin/UserLogin';


function App() {
  const [open, setOpen] = useState(true);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        
        <Route path='/products' element={<PrivateRoute> <Products/> </PrivateRoute> }/>
        

        <Route path='/productDetails/:id' element={<ProductDetails/>}/>
        
        <Route path='/login' element={<AuthModal open={open} handleClose={handleClose}></AuthModal>}/>

        <Route path='/productorder/:id' element={<PrivateRoute><ProductOrder/></PrivateRoute>}/>
        
        {/* <Route path='/login' element={<UserLogin/>}/> */}

        
        <Route exact path='/' element={<Home/>}/>
        <Route path='*' element={<Notfind/>}/>

        
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
