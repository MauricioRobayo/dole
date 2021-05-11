import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

const initialState = {
  words: [
    "Chase",
    "Everest",
    "Marshall",
    "Rocky",
    "Rubble",
    "Ryder",
    "Skye",
    "Tracker",
    "Zuma",
  ],
};

const wordsSlice = createSlice({
  name: "Words",
  initialState,
  reducers: {
    updateWords(state, action: PayloadAction<string[]>) {
      state.words = action.payload;
    },
  },
});

export const selectWords = (state: RootState) => state.words.words;

export default wordsSlice.reducer;
