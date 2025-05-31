const products = [
    {
      id: '01',
      name: 'colchon',
      price: 300000,
      description: 'bla bla bla',
      stock: 10,
      img: 'https://i.postimg.cc/52G4jDQW/temp-Imagegeg-A0q.avif',
      category: 'colchones'
    },
    {
      id: '02',
      name: 'respaldo',
      price: 40000,
      description: 'bla bla bla',
      stock: 3,
      img: 'https://i.postimg.cc/dtxynnSQ/temp-Imagef-OG6rd.avif',
      category: 'respaldos'
    },
    {
      id: '03',
      name: 'almohada',
      price: 80000,
      description: 'bla bla bla',
      stock: 12,
      img: 'https://i.postimg.cc/XJL8vdNZ/temp-Imagec5-YK17.avif',
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
  