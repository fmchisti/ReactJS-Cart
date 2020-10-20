export const initialState = {
    busket: []
};


function reducer(state, action) {

    switch (action.type) {
        case "ADD_TO_BUSKET":
            return {...state, busket: [...state.busket, action.item] }
            break;
        case "REMOVE_FROM_BUSKET":
            //logic for removing item to busket
            let newBusket = [...state.busket];
            const indexFind = state.busket.findIndex((busketItem) => busketItem.id === action.id);
            console.log(indexFind)

            if (indexFind >= 0) {
                newBusket.splice(indexFind, 1)
            } else {
                console.log("Product Not Fount")
            }
            return {...state, busket: newBusket }
            break;
        default:
            return state;
    }
}

export default reducer;