import React, { useState, useEffect } from 'react';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    product_name: '',
    description: '',
    category: '',
    price: '',
    quantity: '',
    seller_name: '',
    seller_location: '',
    seller_pincode: '',
    image: ''
  });
  const [editProduct, setEditProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://omnisynctechnologies.com/api/eco-marketplace');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      } else {
        throw new Error('Failed to fetch products');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value
    });
  };

  const addProduct = async () => {
    try {
      const response = await fetch('https://omnisynctechnologies.com/api/eco-marketplace', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newProduct)
      });
      if (response.ok) {
        const data = await response.json();
        setProducts([...products, data]);
        setNewProduct({
          product_name: '',
          description: '',
          category: '',
          price: '',
          quantity: '',
          seller_name: '',
          seller_location: '',
          seller_pincode: '',
          image: ''
        });
      } else {
        throw new Error('Failed to add product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const openEditModal = (product) => {
    setEditProduct(product);
  };

  const closeEditModal = () => {
    setEditProduct(null);
  };

  const updateProduct = async () => {
    try {
      const response = await fetch(`https://omnisynctechnologies.com/api/eco-marketplace/${editProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(editProduct)
      });
      if (response.ok) {
        const updatedProduct = await response.json();
        const updatedProducts = products.map(product =>
          product.id === updatedProduct.id ? updatedProduct : product
        );
        setProducts(updatedProducts);
        setEditProduct(null);
      } else {
        throw new Error('Failed to update product');
      }
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`https://omnisynctechnologies.com/api/eco-marketplace/${id}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        setProducts(products.filter(product => product.id !== id));
      } else {
        throw new Error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="main-container">
      <h2>Product Listing</h2>
      <div className="add-product-form">
        <input type="text" name="product_name" value={newProduct.product_name} onChange={handleInputChange} placeholder="Product Name" />
        <input type="text" name="description" value={newProduct.description} onChange={handleInputChange} placeholder="Description" />
        <input type="text" name="category" value={newProduct.category} onChange={handleInputChange} placeholder="Category" />
        <input type="number" name="price" value={newProduct.price} onChange={handleInputChange} placeholder="Price" />
        <input type="number" name="quantity" value={newProduct.quantity} onChange={handleInputChange} placeholder="Quantity" />
        <input type="text" name="seller_name" value={newProduct.seller_name} onChange={handleInputChange} placeholder="Seller Name" />
        <input type="text" name="seller_location" value={newProduct.seller_location} onChange={handleInputChange} placeholder="Seller Location" />
        <input type="text" name="seller_pincode" value={newProduct.seller_pincode} onChange={handleInputChange} placeholder="Seller Pincode" />
        <input type="text" name="image" value={newProduct.image} onChange={handleInputChange} placeholder="Image URL" />
        <button onClick={addProduct}>Add Product</button>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Seller Name</th>
            <th>Seller Location</th>
            <th>Seller Pincode</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.product_name}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
              <td>${product.price}</td>
              <td>{product.quantity}</td>
              <td>{product.seller_name}</td>
              <td>{product.seller_location}</td>
              <td>{product.seller_pincode}</td>
              <td><img src={product.image} alt={product.product_name} style={{ maxWidth: '100px' }} /></td>
              <td>
                <button onClick={() => openEditModal(product)}>Edit</button>
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {editProduct && (
        <div className="modal">
          <div className="modal-content">
            <h2>Edit Product</h2>
            <input type="text" name="product_name" value={editProduct.product_name} onChange={(e) => setEditProduct({...editProduct, product_name: e.target.value})} />
            <input type="text" name="description" value={editProduct.description} onChange={(e) => setEditProduct({...editProduct, description: e.target.value})} />
            <input type="text" name="category" value={editProduct.category} onChange={(e) => setEditProduct({...editProduct, category: e.target.value})} />
            <input type="number" name="price" value={editProduct.price} onChange={(e) => setEditProduct({...editProduct, price: e.target.value})} />
            <input type="number" name="quantity" value={editProduct.quantity} onChange={(e) => setEditProduct({...editProduct, quantity: e.target.value})} />
            <input type="text" name="seller_name" value={editProduct.seller_name} onChange={(e) => setEditProduct({...editProduct, seller_name: e.target.value})} />
            <input type="text" name="seller_location" value={editProduct.seller_location} onChange={(e) => setEditProduct({...editProduct, seller_location: e.target.value})} />
            <input type="text" name="seller_pincode" value={editProduct.seller_pincode} onChange={(e) => setEditProduct({...editProduct, seller_pincode: e.target.value})} />
            <input type="text" name="image" value={editProduct.image} onChange={(e) => setEditProduct({...editProduct, image: e.target.value})} />
            <button onClick={updateProduct}>Update</button>
            <button onClick={closeEditModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
