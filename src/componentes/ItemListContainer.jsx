import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList.jsx";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemListContainer = ({ greeting }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryid } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsCollection = categoryid
      ? query(collection(db, "productos"), where("category", "==", categoryid))
      : collection(db, "productos");

    getDocs(productsCollection)
      .then((res) => {
        const list = res.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setData(list);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryid]);

  return (
    <div className="container my-4">
      <h1 className="mb-3">{greeting}</h1>

      {loading ? (
  <div className="spinner"></div>
) : (
  <ItemList data={data} />
)}
    </div>
  );
};

export default ItemListContainer;
