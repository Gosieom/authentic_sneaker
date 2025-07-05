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

  const [editingId, setEditingId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdate = () => {
    if (editingId) {
      setProducts(products.map(p =>
        p.id === editingId ? { ...formData, id: editingId } : p
      ));
      setEditingId(null);
    } else {
      const newProduct = { ...formData, id: Date.now() };
      setProducts([...products, newProduct]);
    }
    setFormData({ name: "", price: "", discount: "", category: "", image: "" });
  };

  const handleEdit = (product) => {
    setFormData(product);
    setEditingId(product.id);
  };

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    window.location.href = "/admin-login";
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Admin Product Manager</h1>

      <button
        onClick={handleLogout}
        className="mb-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Shoe Name" className="border p-2" />
        <input name="price" value={formData.price} onChange={handleChange} placeholder="Price" className="border p-2" />
        <input name="discount" value={formData.discount} onChange={handleChange} placeholder="Discount Price" className="border p-2" />
        <input name="category" value={formData.category} onChange={handleChange} placeholder="Category (men/women/kids)" className="border p-2" />
        <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL or file path" className="border p-2" />
        <button
          onClick={handleAddOrUpdate}
          className="col-span-2 bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          {editingId ? "Update Product" : "Add Product"}
        </button>
      </div>

      <div className="space-y-4">
        {products.length === 0 ? (
          <p className="text-center text-gray-500">No products added yet.</p>
        ) : (
          products.map(product => (
            <div key={product.id} className="flex justify-between items-center border p-4 shadow bg-white">
              <div>
                <h2 className="font-bold">{product.name}</h2>
                <p>Price: ₹{product.price}</p>
                <p>Discount: ₹{product.discount}</p>
                <p>Category: {product.category}</p>
              </div>
              <div className="space-x-2">
                <button onClick={() => handleEdit(product)} className="bg-yellow-500 text-white px-3 py-1 rounded">
                  Edit
                </button>
                <button onClick={() => handleDelete(product.id)} className="bg-red-600 text-white px-3 py-1 rounded">
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminPage;

