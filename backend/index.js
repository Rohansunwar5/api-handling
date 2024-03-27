import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/api/products', (req, res)=> {
  const products = [
    {
      id: 1,
      name: 'Wooden Table',
      price: 200,
      image: 'https://images.unsplash.com/photo-1581730123-093582348b0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdhdEVwb2x5fHx8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Comfy Sofa',
      price: 500,
      image: 'https://images.unsplash.com/photo-1581385423424-bdebdbd9f000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdhdEVwb2x5fHx8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Gaming Chair',
      price: 350,
      image: 'https://images.unsplash.com/photo-1604804033422-7dfe34d4e59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdhdEVwb2x5fHx8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'Modern Lamp',
      price: 120,
      image: 'https://images.unsplash.com/photo-1581385423334-0f23f347d01f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdhdEVwb2x5fHx8fHx8&auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      name: 'Smart Speaker',
      price: 180,
      image: 'https://images.unsplash.com/photo-1595727868321-e7f0b0b79a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdhdEVwb2x5fHx8fHx8&auto=format&fit=crop&w=500&q=60'
    }
  ];

  
  // http://localhost:3000/api/products?search=metal 
  
  // filtering 
  if(req.query.search){
    const filterProducts = products.filter(product => product.name.includes(req.query.search))
    
    res.send(filterProducts);
    return;
  }
  setTimeout(() => {
    res.send(products);
  }, 3000);
  
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
