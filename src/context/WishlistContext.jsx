import { createContext, useState } from "react";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (product) => {
    const exist = wishlist.find((item) => item.id === product.id);

    if (exist) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        toggleWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;