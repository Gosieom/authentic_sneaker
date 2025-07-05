import React, { useState } from "react";

const AdminPage = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    discount: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleAdd = () => {
    if (formData.name && formData.price && formData.image) {
      const newProduct = { ...formData, id: Date.now() };
      setProducts([...products, newProduct]);
      setFormData({ name: "", price: "", discount: "", category: "", image: "" });
    }
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Admin Product Panel</h1>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Shoe Name" className="border p-2" />
        <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="border p-2" />
        <input type="text" name="discount" value={formData.discount} onChange={handleChange} placeholder="Discount Price" className="border p-2" />
        <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category (men/women/kids)" className="border p-2" />
        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL or import path" className="border p-2" />
        <button onClick={handleAdd} className="col-span-2 bg-green-500 text-white py-2">Add Product</button>
      </div>

      <h2 className="text-xl font-semibold mb-2">Product List</h2>
      <div className="grid gap-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between border p-4 bg-white shadow">
            <div>
              <h3 className="font-semibold">{product.name}</h3>
              <p>Price: ₹{product.price} | Discount: ₹{product.discount}</p>
              <p>Category: {product.category}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => handleDelete(product.id)} className="bg-red-500 text-white px-3 py-1">Delete</button>
              {/* Future: Add Edit Button here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;
