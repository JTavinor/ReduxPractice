let lastId = 1;

export default function reducer(state = [], action) {
  switch (action.type) {
    case "itemAdded":
      return [
        ...state,
        {
          id: ++lastId,
          itemName: action.payload.itemName,
          quantity: action.payload.quantity,
          price: action.payload.price,
        },
      ];
    case "itemQuantityUpdated":
      const itemToUpdate = state.filter(
        (item) => item.itemName === action.payload.itemName
      )[0];
      itemToUpdate.quantity += action.payload.quantity;
      const indexOfItem = state.indexOf(itemToUpdate);

      return [
        ...state.slice(0, indexOfItem),
        itemToUpdate,
        ...state.slice(indexOfItem + 1),
      ];
    case "itemRemoved":
      return state.filter((item) => item.itemName !== action.payload.itemName);
    default:
      return state;
  }
}

// const basket = [{ itemName: "name", quantity: "quant", price: "price" }];
