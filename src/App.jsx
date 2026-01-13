import { useState } from "react";
import { Card } from "./components/Card.jsx";
import imgRickMorty from './img/image.png'; 

const App = () => {
  const [characters, setCharacters] = useState([]);

 
  const reqApi = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setCharacters(data.results);
    } catch (error) {
      console.error("Error al obtener los personajes:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#272b33] text-white flex flex-col items-center p-8">
      
      <h1 className="text-5xl font-black text-cyan-400 mb-6">RICK AND MORTY</h1>

      {characters.length === 0 ? (
        <div className="flex flex-col items-center">
          <img src={imgRickMorty} alt="Rick & Morty" className="w-80 mb-8" />
          <button 
            onClick={reqApi} 
            className="bg-green-600 hover:bg-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all"
          >
            Buscar Personajes
          </button>
        </div>
      ) : (
        
        <div className="w-full max-w-7xl">
          <button 
            onClick={() => setCharacters([])} 
            className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded mb-8"
          >
            Volver al Inicio
          </button>
          <Card characters={characters} />
        </div>
      )}

    </div>
  );
};

export default App;