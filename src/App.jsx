import { useState } from "react";
import Header from "./components/layout/Header";
import ProductsList from "./components/products/ProductsList";
import Footer from "./components/layout/Footer";
import AdminBar from "./components/admin/AdminBar";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const addToCartHandler = (id) => {
    const isPresent = cart.includes(id);
    if (isPresent) return;

    setCart(prev => [...prev, id]);
  }

  const removeFromCartHandler = (id) => {
    const isPresent = cart.includes(id);
    if (!isPresent) return;

    setCart(prev => prev.filter(item => item !== id));
  }

  return (
    <div className="container">
      <Header 
        cart={cart} 
        isAdmin={isAdmin}
        setIsAdmin={setIsAdmin}
      />

      <ProductsList
        cart={cart}
        addToCartHandler={addToCartHandler}
        removeFromCartHandler={removeFromCartHandler}
      />

      <Footer />

      {
        isAdmin && <AdminBar />
      }
      
    </div>
  )
}

export default App
