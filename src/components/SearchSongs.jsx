import React from "react";
import SearchData from "./SearchData";

function SearchSongs() {
  console.log(SearchData);
  return (
    <div id="Searchs" style={{display:"none"}}>
      <div>
        njdcdcdicndicsk duchscuscs <br />
        sicjsicjdic
      </div>
      <ul>
        {SearchData.map((data) => (
          <ul key={data.id}>
            <li>{data.image_id}</li>
            <li>{data.title}</li>
          </ul>
        ))}
      </ul>
    </div>
  );
}

export default SearchSongs;
