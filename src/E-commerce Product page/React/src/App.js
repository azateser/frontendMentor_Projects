import Header from "./components/Layouts/Header"
import ProductPage from './components/ProductPage';

import { useState } from "react";

function App() {
  const [cart, setCart] = useState();
  const [openCart, setOpenCart] = useState(false);

  return (
    <div className="max-w-[69.4rem] mx-auto"  onClick={() => openCart && setOpenCart(false)}>
      <Header openCart={openCart} setOpenCart={setOpenCart} cart={cart} setCart={setCart} />
      <ProductPage cart={cart} setCart={setCart} />
    </div>
  )
}

export default App