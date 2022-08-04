export const initialState = {
    basket: [
        {
            id: "1165168",
            title: "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses",
            price: 11.96,
            rating: 5,
            image: "https://5.imimg.com/data5/ANDROID/Default/2021/12/HX/YZ/PU/142959141/product-jpeg-500x500.jpg",
        },
    ],
};
export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            let newBasket = [...state.basket];
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(`Cannot remove product (id: ${action.id})`);
            }
            return { ...state, basket: newBasket };
        default:
            return state;
    }
};

export default reducer;
