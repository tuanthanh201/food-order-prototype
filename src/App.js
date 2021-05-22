import { useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./store/CartContextProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = (event) => {
    event.preventDefault();
    setCartIsShown(true);
  };

  const hideCartHandler = (event) => {
    event.preventDefault();
    setCartIsShown(false);
  };

  return (
    <CartContextProvider>
      <Header showCartHandler={showCartHandler} />
      {cartIsShown && <Cart hideCartHandler={hideCartHandler} />}
      <main>
        <Meals></Meals>
      </main>
    </CartContextProvider>
  );
}

export default App;
