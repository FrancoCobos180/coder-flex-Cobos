import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';
import ProductDetail from './componentes/ejemplos/ProductDetail';
import ItemCount from './componentes/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Error from './componentes/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Ruta principal que muestra el listado de productos */}
        <Route
          path="/"
          element={<ItemListContainer greeting="Bienvenidos a mi app!!" />}
        />

        <Route
          path="/category/:categoryid"element={<ItemListContainer greeting="Estas en la Categoria:" />}/>

        <Route 
        path="/item/:itemid" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<Error />} />

        {/* Ruta dinámica para ver detalle de producto */}
        <Route
          path="/producto/:id"
          element={<ProductDetail />}
        />
      </Routes>

      {/* Si necesitás mostrar ItemCount en todas las páginas, ponelo aquí fuera de <Routes> */}
      <ItemCount stock={7} />
      <ItemCount stock={10} />
    </BrowserRouter>
  );
}

export default App;

