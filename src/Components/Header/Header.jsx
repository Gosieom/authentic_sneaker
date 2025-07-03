import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import cartIcon from './assets/Cart_icon.png';

const sneakerNames = [
  'Nike Air Max',
  'Adidas Ultraboost',
  'Puma Suede',
  'Reebok Classic',
  'New Balance 990',
  'Asics Gel-Kayano',
  'Converse Chuck Taylor',
  'Vans Old Skool',
];

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSneakers, setFilteredSneakers] = useState([]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filtered = sneakerNames.filter((name) =>
        name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSneakers(filtered);
    } else {
      setFilteredSneakers([]);
    }
  };

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '10px 30px',
      backgroundColor: '#f9f9f9',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      {/* Left - Logo */}
      <Link to="/">
        <img src={logo} alt="Authentic Sneaker Logo" style={{ height: '50px' }} />
      </Link>

      {/* Center - Search */}
      <div style={{ position: 'relative', flexGrow: 1, maxWidth: '600px', margin: '0 40px' }}>
        <input
          type="text"
          placeholder="Search sneakers..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            width: '100%',
            padding: '10px 20px',
            borderRadius: '30px',
            border: '1px solid #ccc',
            fontSize: '16px',
            boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            outline: 'none',
          }}
        />
        {filteredSneakers.length > 0 && (
          <ul style={{
            position: 'absolute',
            top: '45px',
            left: 0,
            right: 0,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '8px',
            maxHeight: '200px',
            overflowY: 'auto',
            listStyle: 'none',
            margin: 0,
            padding: '5px 0',
            zIndex: 10,
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          }}>
            {filteredSneakers.map((name, index) => (
              <li
                key={index}
                style={{
                  padding: '8px 20px',
                  cursor: 'pointer',
                  borderBottom: '1px solid #eee',
                }}
                onClick={() => {
                  setSearchTerm(name);
                  setFilteredSneakers([]);
                }}
              >
                {name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Right - Signup and Cart */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
        <Link
          to="/signup"
          style={{
            fontWeight: '600',
            fontSize: '16px',
            color: '#333',
            textDecoration: 'none',
          }}
        >
          Signup
        </Link>

        <Link to="/cart" style={{ position: 'relative' }}>
          <img src={cartIcon} alt="Cart" style={{ height: '30px', cursor: 'pointer' }} />
          <span style={{
            position: 'absolute',
            top: '-5px',
            right: '-10px',
            background: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '2px 6px',
            fontSize: '12px',
            fontWeight: 'bold',
          }}>
            0
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
