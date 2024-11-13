
import Electronics from "../pages/electronics/Electronics";
import Jewelery from "../pages/jewelery/Jewelery";
import Men from "../pages/men/Men";
import Women from "../pages/women/Women";
import Home from "./Home";
import Cart from "../pages/cart/Cart";
import ProductDetails from "../pages/productDetails/ProductDetails";
import { Route, Routes } from "react-router-dom";
import Login from './Login'
const Wrapper = ({isLoggedIn}) => {
  return (
    <div>
        {
            isLoggedIn ?       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/electronics" element={<Electronics />} />
            <Route path="/jewelery" element={<Jewelery />} />
            <Route path="/men's clothing" element={<Men />} />
            <Route path="/women's clothing" element={<Women />} />
            <Route path={`/productDetails/:id`} element={<ProductDetails/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          :<Login/>
        }
    </div>
  )
}

export default Wrapper
