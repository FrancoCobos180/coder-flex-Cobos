import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';
import ProductDetail from './componentes/ejemplos/ProductDetail';
import ItemCount from './componentes/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Error from './componentes/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './Context/CartContext';

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
        <Route path="*" element={<Error />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
      </Routes>
      </CartProvider>
     
    </BrowserRouter>
  );
}

export default App;