import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPokeSpecies } from '../../store/slices/pokemonSliceSpecies';
import { useSelector, useDispatch } from 'react-redux';

import './Catalog.css';
// Components MUI
import {
  CircularProgress,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
} from '@mui/material';

// Icons MUI
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// Components
import Pokemon from '../../components/Pokemon/Pokemon';

function Catalog() {
  const { id } = useParams();

  const [vector, setVector] = useState(false);
  const [vectorr, setVectorr] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState();
  const [isActive, setIsActive] = useState(false);
  const [isActived, setIsActived] = useState(false);

  const data = useSelector((state) => state.poke.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokeSpecies(id));
  }, []);
  useEffect(() => {
    setPokemon(data);
    setTimeout(() => {
      setLoading(false);
    }, 800)
  }, [data]);
  console.log('p', pokemon);

  function handleClick() {
    setVector((vector) => !vector);
  }
  let onToggleCheck = vector ? 'active' : null;

  function handleClicker() {
    setVectorr((vectorr) => !vectorr);
  }
  let onToggleChecker = vectorr ? 'active' : null;

  const sortByPopular = (col) => {
    const sorted = [...pokemon].sort((a, b) =>
      a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1,
    );
    setPokemon(sorted);
  };
  const sortByRatings = (col) => {
    const sorted = [...pokemon].sort((a, b) => (a.order > b.order ? -1 : 1));
    setPokemon(sorted);
  };
  const sortByPower = (col) => {
    const sorted = [...pokemon].sort((a, b) => (a.base_experience > b.base_experience ? -1 : 1));
    setPokemon(sorted);
  };

  const filterPokemons = (gener) => {
    const updatedPokemons = data.filter((poke) => {
      return poke.height === gener;
    });
    setPokemon(updatedPokemons);
  };

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div class="Catalog">
      <div class="rounder"></div>
      <div className="dropdowns d-flex flex-column">
        <hr className="line" />
        <div className="first-dropdown">
          <h3 className="first-dropdown-btn">Поколение</h3>
          <div onClick={(e) => setIsActive(!isActive)}>
            <KeyboardArrowUpIcon
              className={`vector ${onToggleCheck}`}
              sx={{ cursor: 'pointer', ml: '2px' }}
              onClick={handleClick}
            />
          </div><hr className="line" />
        </div>
        {isActive && (
          <div className="dropdown-content">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}>
                <FormControlLabel
                  sx={{ mt: '-50px', mb: '-10px' }}
                  value="1-e"
                  control={
                    <Radio
                      onClick={() => filterPokemons(7)}
                      sx={{
                        '&.Mui-checked': { color: '#000000' },
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                      }}
                    />
                  }
                  label="1-e"
                />
                <FormControlLabel
                  sx={{ mb: '-10px' }}
                  value="2-e"
                  control={
                    <Radio
                      onClick={() => filterPokemons(5)}
                      sx={{
                        '&.Mui-checked': { color: '#000000' },
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                      }}
                    />
                  }
                  label="2-e"
                />
                <FormControlLabel
                  sx={{ mb: '-10px' }}
                  value="3-e"
                  control={
                    <Radio
                      onClick={() => filterPokemons(6)}
                      sx={{
                        '&.Mui-checked': { color: '#000000' },
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                      }}
                    />
                  }
                  label="3-e"
                />
                <FormControlLabel
                  sx={{ mb: '-10px' }}
                  value="4-e"
                  control={
                    <Radio
                      onClick={() => filterPokemons(17)} // Components MUI
                      sx={{
                        '&.Mui-checked': { color: '#000000' },
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                      }}
                    />
                  }
                  label="4-e"
                />
                <FormControlLabel
                  sx={{ mb: '-10px' }}
                  value="5-e"
                  control={
                    <Radio
                      onClick={() => filterPokemons(4)}
                      sx={{
                        '&.Mui-checked': { color: '#000000' },
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                      }}
                    />
                  }
                  label="5-e"
                />
                <FormControlLabel
                  sx={{ mb: '-10px' }}
                  value="6-e"
                  control={
                    <Radio
                      onClick={() => filterPokemons(10)}
                      sx={{
                        '&.Mui-checked': { color: '#000000' },
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                      }}
                    />
                  }
                  label="6-e"
                />
                <FormControlLabel
                  sx={{ mb: '-10px' }}
                  value="7-e"
                  control={
                    <Radio
                      onClick={() => filterPokemons(12)}
                      sx={{
                        '&.Mui-checked': { color: '#000000' },
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                      }}
                    />
                  }
                  label="7-e"
                />
                <FormControlLabel
                  sx={{ mb: '-10px' }}
                  value="8-e"
                  control={
                    <Radio
                      onClick={() => filterPokemons(8)}
                      sx={{
                        '&.Mui-checked': { color: '#000000' },
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                      }}
                    />
                  }
                  label="8-e"
                />
                <FormControlLabel
                  sx={{ mb: '-30px' }}
                  value="9-e и новее"
                  control={
                    <Radio
                      onClick={() => filterPokemons(2)}
                      sx={{
                        '&.Mui-checked': { color: '#000000' },
                        '& .MuiSvgIcon-root': { fontSize: 28 },
                      }}
                    />
                  }
                  label="9-e и новее"
                />
              </RadioGroup>
            </FormControl>
          </div>
        )}
        <div className="second-dropdown">
          <h3 className="second-dropdown-btn">Тип</h3>
          <div onClick={(e) => setIsActived(!isActived)}>
            <KeyboardArrowUpIcon
              className={`${onToggleChecker}`}
              sx={{ cursor: 'pointer', ml: '11px' }}
              onClick={handleClicker}
            />
          </div>
        </div>
        {isActived && (
          <div className="dropdown-content flex-column d-flex">
            <FormControlLabel
              sx={{ mt: '-40px' }}
              value="1-e"
              control={
                <Checkbox
                  onClick={() => filterPokemons(7)}
                  sx={{
                    '&.Mui-checked': { color: '#000000' },
                    '& .MuiSvgIcon-root': { fontSize: 28 },
                  }}
                />
              }
              label="1-e"
            />
            <FormControlLabel
              sx={{ mb: '-30px' }}
              value="2-e"
              control={
                <Checkbox
                  onClick={() => filterPokemons(20)}
                  sx={{
                    '&.Mui-checked': { color: '#000000' },
                    '& .MuiSvgIcon-root': { fontSize: 28 },
                  }}
                />
              }
              label="2-e"
            />
          </div>
        )}
        <div className="third-dropdown">
          <h3 className="third-dropdown-btn">Физические</h3>
          <KeyboardArrowUpIcon sx={{ cursor: 'pointer', mr: '2px' }} />
        </div>
        <div className="fourth-dropdown">
          <h3 className="fourth-dropdown-btn">Специалные</h3>
          <KeyboardArrowUpIcon sx={{ cursor: 'pointer' }} />
        </div>
      </div>
      <div className="r-p">
        <div className="sort">
          <h3>Сортировать по:</h3>
          <div className="sort-items">
            <a
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
              onClick={() => sortByPopular('name')}>
              Популярности
            </a>
            <a
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
              onClick={() => sortByRatings()}>
              Рейтингу
            </a>
            <a
              style={{ textDecoration: 'underline', cursor: 'pointer' }}
              onClick={() => sortByPower()}>
              Силу
            </a>
          </div>
        </div>
        {loading ? (
          <div className="spinner" style={{marginLeft: '350px'}}>
            <CircularProgress className="spin" size={180} color="inherit" />
          </div>
        ) : (
          <Pokemon pokemon={pokemon} />
        )}
      </div>
    </div>
  );
}

export default Catalog;
