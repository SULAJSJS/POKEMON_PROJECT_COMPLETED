import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const res = 'https://pokeapi.co/api/v2/pokemon/';
const res1 = 'https://pokeapi.co/api/v2/pokemon-species/';

export const fetchPokemon = createAsyncThunk(
  'poke/pokemonFetch',
  async function data(id, { dispatch }) {
    const resp = await fetch(`${res}${id}`).then((respon) => {
      return respon.json();
    });
    const resp1 = await fetch(`${res1}${id}`).then((respon1) => {
      return respon1.json();
    });
    
    const data = await Promise.all([resp, resp1]).then((response) => {
      return response;
    });
    return data;
  },
);

const initialState = {
  pokemon: [],
  isLoading: true,
  isError: false,
};

const pokeSlice = createSlice({
  name: 'poke',
  initialState,
  reducers: {
    setPokemon(state, action) {
      state.pokemon = action.payload;
    },
  },

  extraReducers: {
    [fetchPokemon.fulfilled.type]: (state, action) => {
      state.pokemon = action.payload;
    },
    [fetchPokemon.pending.type]: (state) => {
      state.isLoaded = false;
      state.isError = false;
    },
    [fetchPokemon.rejected.type]: (state) => {
      state.isLoaded = true;
      state.isError = true;
    },
  },
});

export const { setPokemon } = pokeSlice.actions;
export default pokeSlice.reducer;


