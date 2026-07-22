import { createContext, useState } from "react";

export const CategoryContext = createContext();

function CategoryProvider({ children }) {
  const [category, setCategory] = useState("All");

  return (
    <CategoryContext.Provider
      value={{
        category,
        setCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
}

export default CategoryProvider;