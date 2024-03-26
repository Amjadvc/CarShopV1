import { createContext, useContext, useEffect, useState } from "react";

const TheamContext = createContext();

function TheamProvider({ children }) {
  const [isFakeDark, setIsFakeDark] = useState(false);

  function handelFakeDark() {
    setIsFakeDark((isFakeDark) => !isFakeDark);
  }
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <TheamContext.Provider value={{ handelFakeDark, isFakeDark }}>
      {children}
    </TheamContext.Provider>
  );
}

function useTheam() {
  const context = useContext(TheamContext);
  if (context === undefined) {
    throw new Error("TheamContext are used wrong");
  }
  return context;
}

export { TheamProvider, useTheam };
