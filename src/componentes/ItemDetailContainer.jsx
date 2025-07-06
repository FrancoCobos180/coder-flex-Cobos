import React, { useEffect, useState } from 'react';
import { getOneProduct } from '../Mock/AsyincService';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);
  const { itemid } = useParams();

  useEffect(() => {
    getOneProduct(itemid)
      .then((response) => setProducto(response))
      .catch((error) => console.log(error));
  }, [itemid]);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
};

export default ItemDetailContainer;
