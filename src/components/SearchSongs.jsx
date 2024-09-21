import React, { useState } from 'react';
import './Search.css'
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom';

const itemsData = [
  { id: 1, name: 'Apple', category: 'Fruit', price: 1.2 },
  { id: 2, name: 'Banana', category: 'Fruit', price: 0.5 },
  { id: 3, name: 'Carrot', category: 'Vegetable', price: 0.8 },
  { id: 4, name: 'Mango', category: 'Fruit', price: 1.5 },
  { id: 5, name: 'Cucumber', category: 'Vegetable', price: 0.6 },
  { id: 6, name: 'Grapes', category: 'Fruit', price: 2.0 },
  { id: 7, name: 'Strawberry', category: 'Fruit', price: 3.0 },
  { id: 8, name: 'Tomato', category: 'Vegetable', price: 1.0 },
  { id: 9, name: 'Blueberry', category: 'Fruit', price: 2.5 },
  { id: 10, name: 'Watermelon', category: 'Fruit', price: 5.0 },
];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredItems = itemsData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.category.toLowerCase().includes(searchTerm) ||
      String(item.price).includes(searchTerm)
  );

  const handleItemClick = (id) => {
    navigate(`/MusicApp-Spotify/item/${id}`);
  };

  return (
    <div>
     
      <input className='input'
        type="search"
        placeholder="    What do you want to play ?"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item.id} onClick={() => handleItemClick(item.id)}>
            <h3>{item.name}</h3>
            <p>Category: {item.category}</p>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ItemDetailPage = () => {
  const { id } = useParams();
  const item = itemsData.find((item) => item.id === parseInt(id, 10));

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    <div>
      <h2>{item.name}</h2>
      <p>Category: {item.category}</p>
      <p>Price: ${item.price}</p>
      <Link to="/MusicApp-Spotify/">Back to List</Link>
    </div>
  );
};

const App = () => {
  return (
    <div id='Searchs' style={{display:"none"}}>

    <Router>
      <Routes>
        <Route path="/MusicApp-Spotify/" element={<HomePage />} />
        <Route path="/MusicApp-Spotify/item/:id" element={<ItemDetailPage />} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;
