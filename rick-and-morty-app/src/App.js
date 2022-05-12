import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";

function App() {
  const [characters, setcharacters] = useState([]);

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (initialUrl) => {
    fetch(initialUrl)
      .then((response) => response.json())
      .then((data) => setcharacters(data.results))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, []);

  return (
    <>
      <Navbar brand="Rick and Morty App" />
      <div className="container">
        <Characters characters={characters}/>
      </div>
    </>
  );
}

export default App;
