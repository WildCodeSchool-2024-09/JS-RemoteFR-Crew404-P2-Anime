import { useState } from "react";

function Search() {
  const [NavSearch, setNavSearch] = useState("");
  return (
    <input
      type="text"
      value={NavSearch}
      className="Search"
      placeholder="  Rechercher un anime"
      onChange={(event) => {
        setNavSearch(event.target.value);
      }}
    />
  );
}

export default Search;
