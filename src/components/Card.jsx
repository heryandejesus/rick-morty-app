export const Card = ({ characters }) => {
  return (
    
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      {characters.map((character) => (
        <div 
          key={character.id} 
          className="flex flex-col sm:flex-row bg-[#3c3e44] rounded-lg overflow-hidden shadow-2xl h-auto sm:h-52 border border-transparent hover:border-orange-500 transition-all duration-300"
        >
          
          <div className="w-full sm:w-2/5">
            <img 
              src={character.image} 
              alt={character.name} 
              className="w-full h-full object-cover" 
            />
          </div>

          
          <div className="w-full sm:w-3/5 p-4 flex flex-col justify-between text-left">
            <section>
              <h2 className="text-2xl font-black hover:text-orange-500 cursor-pointer transition-colors leading-tight">
                {character.name}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span className={`h-2.5 w-2.5 rounded-full ${
                  character.status === 'Alive' ? 'bg-green-500' : 
                  character.status === 'Dead' ? 'bg-red-500' : 'bg-gray-400'
                }`}></span>
                <span className="text-sm font-bold">
                  {character.status} - {character.species}
                </span>
              </div>
            </section>

            <section className="flex flex-col">
              <span className="text-gray-400 text-sm font-semibold">Last known location:</span>
              <span className="text-white hover:text-orange-400 cursor-pointer transition-colors">
                {character.location.name}
              </span>
            </section>

            <section className="flex flex-col">
              <span className="text-gray-400 text-sm font-semibold">First seen in:</span>
              <span className="text-white hover:text-orange-400 cursor-pointer transition-colors">
                {character.origin.name}
              </span>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
};