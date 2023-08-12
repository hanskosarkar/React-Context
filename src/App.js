import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import ProductContainer from "./components/ProductContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
