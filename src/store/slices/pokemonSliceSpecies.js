import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokeSpecies = createAsyncThunk(
  'poke/pokemonFetch',
  async function dataOne(id, { rejectWithValue }) {
    const getPokemon = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`;
    const newPokemons = [];
    for (let i = 1; i <= 100; i++) {
      newPokemons.push(
        await fetch(getPokemon(i)).then((response) => {
          return response.json();

        }),
      );
    }
    console.log(newPokemons)
    return newPokemons;
  },
);

export const initialState = {
  data: null,
  isLoading: true,
  isError: false,
};

const pokemonSlice = createSlice({
  name: 'poke',
  initialState,
  reducers: {
    setData(state, action){
      state.data = action.payload;
    },
  },
  extraReducers: {
    [fetchPokeSpecies.fulfilled.type]: (state, action) => {
      state.data = action?.payload;
      console.log('data', action.payload);
    },
    [fetchPokeSpecies.pending.type]: (state) => {
      state.isLoading = false;
      state.isError = false;
    },
    [fetchPokeSpecies.rejected.type]: (state) => {
      state.isLoading = true;
      state.isError = true;
      state.data = [];
    },
  },
});

export const { setData } = pokemonSlice.actions;
export default pokemonSlice.reducer;
