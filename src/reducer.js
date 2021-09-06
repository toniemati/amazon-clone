export const initialState = {
  basket: [],
  user: null
};

export const getBasketTotal = (basket) => basket.reduce((acc, { price }) => acc + price, 0);

const reducer = (state, action) => {
  console.log('Action 🌵:', action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }

    case 'ADD_TO_BASKET':
      return { 
        ...state,
        basket: [...state.basket, action.payload]
      };

    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload)
      }

    default:
      return state;
  }
}

export default reducer;