import React, { useState } from "react";
import "./Search.css";
import songlogo from '../assets/songlogo.jpg'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import searchData from "../search";

// const searchData = [
//   { snumber: 1, title: 'Apple', src: 'Fruit', Artist1: 1.2 },
//   { snumber: 2, title: 'Banana', src: 'Fruit', Artist1: 0.5 },
//   { snumber: 3, title: 'Carrot', src: 'Vegetable', Artist1: 0.8 },
//   { snumber: 4, title: 'Mango', src: 'Fruit', Artist1: 1.5 },
//   { snumber: 5, title: 'Cucumber', src: 'Vegetable', Artist1: 0.6 },
//   { snumber: 6, title: 'Grapes', src: 'Fruit', Artist1: 2.0 },
//   { snumber: 7, title: 'Strawberry', src: 'Fruit', Artist1: 3.0 },
//   { snumber: 8, title: 'Tomato', src: 'Vegetable', Artist1: 1.0 },
//   { snumber: 9, title: 'Blueberry', src: 'Fruit', Artist1: 2.5 },
//   { snumber: 10, title: 'Watermelon', src: 'Fruit', Artist1: 5.0 },
// ];

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredItems = searchData.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm) ||
      item.src.toLowerCase().includes(searchTerm) ||
      item.popularity.toLowerCase().includes(searchTerm) ||
      item.time.toLowerCase().includes(searchTerm) ||
      
      String(item.Artist1).includes(searchTerm)
  );

  const handleItemClick = (snumber) => {
    navigate(`/MusicApp-Spotify/item/${snumber}`);
  };

  return (
    <div className="SearchMain">
      <input
        className="input"
        type="search"
        placeholder="    What do you want to play ?"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="songItoms">
        {filteredItems.map((item) => (
          // <li key={item.snumber} onClick={() => handleItemClick(item.snumber)}>
          //   <h3>{item.title}</h3>
          //   <p>src: {item.src}</p>
          //   <p>popularity:{item.popularity}</p>
          //   <p>Artist1: ${item.Artist1}</p>
          // </li>

          <li
            key={item.snumber}
            onClick={() => handleItemClick(item.snumber)}
            class="card"
          >
            <h5 class="card-header"><img src={item.logo} alt="" /></h5>
            <div class="card-body">
              {/* <p class="card-text"></p> */}
              <p class="card-text">{item.title}&nbsp;-&nbsp;{item.Artist1}</p>
              <h5 class="card-title">
                {item.popularity}&nbsp;&nbsp;({item.time})
              </h5>
        <audio controls>
        <source src={item.src} type="audio/mpeg" />
       
      </audio>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ItemDetailPage = () => {
  const { snumber } = useParams();
  const item = searchData.find(
    (item) => item.snumber === parseInt(snumber, 10)
  );

  if (!item) {
    return <p>Item not found</p>;
  }

  return (
    //this is what a am going to see after i click on a song
    <div>
      <Link id="link" to="/MusicApp-Spotify/"><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg></Link>
      <div className="SongAfterClick">
        <img src={songlogo} alt="" />
        <p className="titleartist">{item.title} - {item.Artist1}</p>
        <audio controls>
        <source src={item.src} type="audio/mpeg" />
       
      </audio>

      </div>
      {/* <h2>{item.title}</h2>
      <p>src: {item.src}</p>
      <p>Artist1: ${item.Artist1}</p> */}

    </div>
  );
};

const SearchSongs = () => {
  return (
    <div id="Searchs" style={{ display: "none" }}>
      <Router>
        <Routes>
          <Route path="/MusicApp-Spotify/" element={<HomePage />} />
          <Route
            path="/MusicApp-Spotify/item/:snumber"
            element={<ItemDetailPage />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default SearchSongs;
