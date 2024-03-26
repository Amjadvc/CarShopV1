import { createContext, useContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const CarContext = createContext();

function CarItemsProvider({ children }) {
  const [cookies, setCookie] = useCookies(["cartItem", "quantity"]);
  const [acceptCookies, setAcceptCookies] = useState(null);

  const [cartItem, setCartItem] = useState(() => {
    return cookies.cartItem ? cookies.cartItem : [];
  });

  const [quantity, setQuantity] = useState(() => {
    return cookies.quantity ? cookies.quantity : 0;
  });

  function addToCart(handelNewItem) {
    //check if item exist before
    const itemToUpdate = cartItem.find(
      (item) =>
        item.id === handelNewItem.id &&
        item.choosenColor === handelNewItem.choosenColor
    );

    //if item not exist before => add a new item
    if (itemToUpdate === undefined) {
      setCartItem([...cartItem, handelNewItem]);
      setQuantity((quantity) => (quantity += handelNewItem.quantity));
    }
    //if item exist before => update the item quantity and price
    else {
      const updatedCartItem = cartItem.map((item) => {
        if (
          item.id === handelNewItem.id &&
          item.choosenColor === handelNewItem.choosenColor
        ) {
          return {
            ...item,
            quantity: item.quantity + handelNewItem.quantity,
            price: item.price + handelNewItem.price,
          };
        }
        return item;
      });
      setCartItem(updatedCartItem);
      setQuantity((quantity) => (quantity += handelNewItem.quantity));
    }
  }

  function deteleFromCart(deletedItem) {
    const updatedCarItemAfterDelete = cartItem.filter((item) => {
      return (
        item.id !== deletedItem.id ||
        item.choosenColor !== deletedItem.choosenColor
      );
    });
    setQuantity((quantity) => (quantity -= deletedItem.quantity));
    setCartItem(updatedCarItemAfterDelete);
  }

  useEffect(() => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 10);

    if (acceptCookies) {
      setCookie("cartItem", JSON.stringify(cartItem), {
        expires: expirationDate,
      });
      setCookie("quantity", JSON.stringify(quantity), {
        expires: expirationDate,
      });
    }
  }, [cartItem, quantity, setCookie, acceptCookies]);

  return (
    <CarContext.Provider
      value={{
        cartItem,
        quantity,
        addToCart,
        deteleFromCart,
        acceptCookies,
        setAcceptCookies,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}

function useCars() {
  const context = useContext(CarContext);
  if (context === undefined) {
    throw new Error("CarContext are used wrong");
  }
  return context;
}

export { CarItemsProvider, useCars };
