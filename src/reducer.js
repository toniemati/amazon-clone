export const initialState = {
  basket: [{
    id: '_5j786gy23',
    title: 'Amerous 15 Inches Magnetic Wooden Chess Set - 2 Extra Queens - Folding Board, Handmade Portable Travel Chess Board Game Sets with Game Pieces Storage Slots - Beginner Chess Set for Kids and Adults',
    price: 29.99,
    rating: 5,
    image: 'https://m.media-amazon.com/images/I/715WDtUWeCS._AC_SX679_.jpg'
  }],
  user: null
};

export const getBasketTotal = (basket) => basket.reduce((acc, { price }) => acc + price, 0);

const reducer = (state, action) => {
  console.log('Action 🌵:', action);

  switch (action.type) {
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