import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProducts } from "../../Mock/AsyincService.jsx";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProducts().then((productos) => {
      const encontrado = productos.find((p) => p.id === id);
      setProduct(encontrado);
    });
  }, [id]);

  if (!product) return <p>Cargando producto...</p>;

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

