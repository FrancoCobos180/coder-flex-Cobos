import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../Mock/AsyincService.jsx";
import ItemList from "./ItemList.jsx";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        if (categoryid) {
          const productosFiltrados = respuesta.filter(
            (prod) => prod.category === categoryid
          );
          setData(productosFiltrados);
        } else {
          setData(respuesta);
        }
      })
      .catch((error) => console.error(error));
  }, [categoryid]);

  return (
    <div>
        <input/>
      <h1>{greeting}</h1>
      <ItemList data={data} />
    </div>
  );
};

export default ItemListContainer;
