import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';
import ProductDetail from './componentes/ejemplos/ProductDetail';
import ItemCount from './componentes/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Error from './componentes/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import Cart from "./componentes/Cart";
import Checkout from './componentes/Checkout';
import Footer from './componentes/Footer'; // 👉 Importá el Footer

function App() {
  const handleAdd = (cantidad) => {
    console.log(`Agregaste ${cantidad} productos`);
  };

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenidos a mi app!!" />}
          />
          <Route
            path="/category/:categoryid"
            element={<ItemListContainer greeting="Estas en la Categoria:" />}
          />
          <Route path="/item/:itemid" element={<ItemDetailContainer />} />
          <Route path="/producto/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer /> {/* 👉 Agregá el footer acá */}
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
