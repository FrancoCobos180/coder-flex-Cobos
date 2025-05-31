
import './App.css'
import ItemListContainer from './componentes/ItemListContainer'
import Navbar from './componentes/Navbar';
import ProductDetail from './componentes/ejemplos/ProductDetail';
import ItemCount from './componentes/itemcount';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {




return(
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<ItemListContainer greeting="Bienvenidos a mi app!!"/>} />
    <Route path='/items' element={<ProductDetail/>}/>
  </Routes>
  
  <ItemCount stock={7}/>
  <ItemCount stock={10}/>
  </BrowserRouter>
)  
}
  
export default App
