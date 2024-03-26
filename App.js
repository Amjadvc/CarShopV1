import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import Catalogue from "./pages/Catalogue/Catalogue";
import ContactUs from "./pages/ContactUs/ContactUs";
import Help from "./pages/Help/Help";
import Cart from "./pages/Cart/Cart";
import Register from "./pages/Register/Register";
import Details from "./pages/Details/Details";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import dataCarItems from "./data/carItems.json";
import { useState } from "react";
import { CarItemsProvider } from "./context/CarItemsContext";
import { TheamProvider } from "./context/TheamContext";
import CookiesBanner from "./components/CookiesBanner/CookiesBanner";

function App() {
  const [carData] = useState(dataCarItems);

  return (
    <TheamProvider>
      <CarItemsProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage carData={carData} />} />
            <Route path="catalogue" element={<Catalogue />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="help" element={<Help />} />
            <Route path="cart" element={<Cart />} />
            <Route path="register" element={<Register />} />
            <Route
              path="details/:userId"
              element={<Details carData={carData} />}
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <CookiesBanner />
      </CarItemsProvider>
    </TheamProvider>
  );
}

export default App;
