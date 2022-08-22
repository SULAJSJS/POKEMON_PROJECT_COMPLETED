import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Pokemon.css';
function Pokemon({ pokemon }) {
  const [data, setData] = useState(pokemon);


  useEffect(() => {
    setData(pokemon);
  }, [pokemon]);

  return (
    <div>
        <div className="pokemonCard">
          {data?.map((p) => (
            <div className="card">
              <Link to={`pokemon/${p.name}`}>
                <img
                  className="pokemonImg"
                  width={300}
                  height={300}
                  src={p.sprites.other.dream_world.front_default}
                  alt="Hello"
                />
              </Link>
              <Link style={{ textDecoration: 'none' }} to={`/pokemon/${p.name}`}>
                <p className="pokemonName">{p.name}</p>
              </Link>
            </div>
          ))}
        </div>
    </div>
  );
}

export default Pokemon;
