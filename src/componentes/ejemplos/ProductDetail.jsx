// src/pages/ProductDetail.jsx
import { useParams } from 'react-router-dom';
import products from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <p>Producto no encontrado</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.img} alt={product.name} width={200} />
      <p>{product.description}</p>
      <p><strong>Precio:</strong> ${product.price}</p>
    </div>
  );
};

export default ProductDetail;
