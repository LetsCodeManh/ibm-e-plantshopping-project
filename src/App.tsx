import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingpage/LandingPage";
import ShoppingPage from "./pages/shoppingpage/ShoppingPage";
import CartPage from "./pages/cartpage/CartPage";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/shoppingpage" element={<ShoppingPage />} />
      <Route path="/cartpage" element={<CartPage />} />
    </Routes>
  );
}

export default App;
