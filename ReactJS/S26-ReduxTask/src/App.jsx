// import A from './component/contextAPI/A'
import "./App.css";
import Nav from "./component/Nav";
import Electronics from "./pages/electronics/Electronics";
import Jewelery from "./pages/jewelery/Jewelery";
import Men from "./pages/men/Men";
import Women from "./pages/women/Women";
import Home from "./component/Home";
import Cart from "./pages/cart/Cart";
import ProductDetails from "./pages/productDetails/ProductDetails";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="appContainer">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/jewelery" element={<Jewelery />} />
        <Route path="/men's clothing" element={<Men />} />
        <Route path="/women's clothing" element={<Women />} />
        <Route path={`/productDetails/:id`} element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
