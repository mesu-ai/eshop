import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import Notfind from './pages/notfind/Notfind';
import Navbar from './components/shared/navbar/Navbar';
import ProductDetails from './pages/products/productDetails/ProductDetails';
import AuthProvider from './contex/AuthProvider';

import PrivateRoute from './components/authentication/privateroute/PrivateRoute';
import ProductOrder from './pages/products/productOrder/ProductOrder';
import BuyProduct from './pages/products/buyProduct/BuyProduct';
import Payment from './pages/payment/Payment';
import ConfirmOrder from './pages/order/confirmOrder/ConfirmOrder';
import DashBoard from './pages/dashboard/DashBoard';



function App() {
  
  
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

        <Route path='dashboard/*' element={<PrivateRoute><DashBoard/></PrivateRoute>}/>


        <Route path='/productorder/:id' element={<PrivateRoute><ProductOrder/></PrivateRoute>}/>

        <Route path='/payment' element={<PrivateRoute><Payment/></PrivateRoute>}>

        <Route path=':id' element={<PrivateRoute><Payment/></PrivateRoute>}/>

        </Route>
        

        <Route path='/confirmorder' element={<PrivateRoute><ConfirmOrder/></PrivateRoute>}/>

  

        
        <Route exact path='/' element={<Home/>}/>
        <Route path='*' element={<Notfind/>}/>

        
      </Routes>
       {/* <Footer></Footer> */}
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
