import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Notfind from './pages/notfind/Notfind';
import Navbar from './components/shared/navbar/Navbar';
import Footer from './components/shared/footer/Footer';
import ProductDetails from './pages/products/productDetails/ProductDetails';
import AuthProvider from './contex/AuthProvider';
// import AuthModal from './components/authentication/AuthModal';
// import UserLogin from './components/authentication/userlogin/UserLogin';
import PrivateRoute from './components/authentication/privateroute/PrivateRoute';
import ProductOrder from './pages/products/productOrder/ProductOrder';
import BuyProduct from './pages/products/buyProduct/BuyProduct';
import ProductCategory from './pages/products/productCategory/ProductCategory';

// import AuthModal from './components/authentication/AuthModal';
// import UserLogin from './components/authentication/userlogin/UserLogin';


function App() {
  
  // const [open, setOpen] = useState(true);
    // const handleOpen = () => setOpen(true);
    
    // const handleClose = () =>{
    //   setOpen(false);
    //   //  window.history.back();
    // } 
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        
        <Route path='/products' element={ <Products/>}>
          <Route path=':findItem' element={<Products/>}/>
        </Route>

        <Route path='/shoppingcart' element={<PrivateRoute> <ProductOrder/> </PrivateRoute> }/>
        
        
        <Route path='/buyproduct/:id' element={<BuyProduct/>}/>


        <Route path='/productdetails/:id' element={<ProductDetails/>}/>
        
        {/* <Route path='/login' element={<AuthModal open={open} handleClose={handleClose}></AuthModal>}/> */}

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
