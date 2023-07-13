import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allNotes: [
    {
      id: "1",
      title: "Next Js 1",
      description:
        "There are many great courses available for learning Next.js, here in the Best Next JS courses we will recommend a few courses that are particularly well suited for beginners and intermediate & advanced learners who are looking to learn Next.js. We will see a list of tutorials from udemy, educative.io, Pluralsight, etc. Also, we will keep and",
    },
    {
      id: "2",
      title: "Next Js 2",
      description:
        "There are many great courses available for learning Next.js, here in the Best Next JS courses we will recommend a few courses that are particularly well suited for beginners and intermediate & advanced learners who are looking to learn Next.js. We will see a list of tutorials from udemy, educative.io, Pluralsight, etc. Also, we will keep and",
    },
    {
      id: "3",
      title: "Next Js 3",
      description:
        "There are many great courses available for learning Next.js, here in the Best Next JS courses we will recommend a few courses that are particularly well suited for beginners and intermediate & advanced learners who are looking to learn Next.js. We will see a list of tutorials from udemy, educative.io, Pluralsight, etc. Also, we will keep and",
    },
    {
      id: "4",
      title: "Next Js 4",
      description:
        "There are many great courses available for learning Next.js, here in the Best Next JS courses we will recommend a few courses that are particularly well suited for beginners and intermediate & advanced learners who are looking to learn Next.js. We will see a list of tutorials from udemy, educative.io, Pluralsight, etc. Also, we will keep and",
    },
  ],
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    add: (state, { payload }) => {
      let { id } = payload;

      let index = state.allNotes.findIndex((e) => e.id === id);

      if (index >= 0) {
        //Update existing record
        state.allNotes[index] = payload;
      } else {
        //Add new Record
        state.allNotes.push(payload);
      }
    },

    deleteItem: (state, { payload }) => {
      state.allNotes = state.allNotes.filter((item) => item?.id !== payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { add, deleteItem } = notesSlice.actions;

export default notesSlice.reducer;
