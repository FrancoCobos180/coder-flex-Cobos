const products = [
    {
      id: '01',
      name: 'Colchon',
      price: 300000,
      description: 'bla bla bla',
      stock: 10,
      img: 'https://i.postimg.cc/QVLQxWCq/temp-Image7y8n-QP.avif',
      category: 'colchones'
    },
    {
      id: '02',
      name: 'Respaldo',
      price: 40000,
      description: 'bla bla bla',
      stock: 3,
      img: 'https://i.postimg.cc/sDBHjp65/temp-Imageelxw-ND.avif',
      category: 'respaldos'
    },
    {
      id: '03',
      name: 'Almohada',
      price: 80000,
      description: 'bla bla bla',
      stock: 12,
      img: 'https://i.postimg.cc/Bbjpv0gJ/temp-Image-NCTr3-D.avif',
      category: 'almohadas'
    }
  ];
  
  let error = false;
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (!error) {
          resolve(products);
        } else {
          reject('Hubo un error, intente más tarde');
        }
      }, 3000);
    });
  };
  
  export const getOneProduct = (id) => {
    const product = products.find((p) => p.id === id);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (product) {
          resolve(product);
        } else {
          reject("Producto no encontrado");
        }
      }, 1000);
    });
  };