import { createContext, useContext, useState } from "react";

const HomeVariantsContext = createContext();

function HomeVariantsProvider({ children }) {
  const homeVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        duration: 0.5,
        ease: "easeIn",
        delay: 0.4,
      },
    },
  };
  const [homeVariant] = useState(homeVariants);

  return (
    <HomeVariantsContext.Provider value={{ homeVariant }}>
      {children}
    </HomeVariantsContext.Provider>
  );
}

function useHomeVariants() {
  const context = useContext(HomeVariantsContext);
  if (context === undefined) {
    throw new Error("CarContext are used wrong");
  }
  return context;
}

export { HomeVariantsProvider, useHomeVariants };
