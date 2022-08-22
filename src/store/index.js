import { configureStore } from "@reduxjs/toolkit";
import pokemon from './slices/pokemonSlice';
import poke from './slices/pokemonSliceSpecies';

export const store = configureStore({
    reducer: {
        pokemon,
        poke
    }
});

