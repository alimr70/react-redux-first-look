const initialState = [
  {
    id: 1,
    title: "Todo #1",
    done: false,
  },
  {
    id: 2,
    title: "Todo #2",
    done: false,
  },
  {
    id: 3,
    title: "Todo #3",
    done: true,
  },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default todoReducer;
