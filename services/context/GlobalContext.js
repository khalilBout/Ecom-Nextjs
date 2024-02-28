"use client";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";
import { getUser } from "@/services/getData/user/index";
export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [cart, setCart] = useState();
  const [showCartModal, setShowCartModal] = useState(false);
  const [pageLevelLoader, setPageLevelLoader] = useState(true);
  const [componentLevelLoader, setComponentLevelLoader] = useState({
    loading: false,
    id: "",
  });
  // const [addresses, setAddresses] = useState([]);

  // manage cart item
  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : {}
    );
  };

  const addItemToCart = async ({ itemToCart }) => {
    const item = {
      titleProduct: itemToCart.titleProduct,
      finalPrice: itemToCart.finalPrice,
      price: itemToCart.price,
      idProduct: itemToCart.idProduct,
      idModel: itemToCart.idModel,
      Qt: itemToCart.Qt,
      Color: itemToCart.Color,
      sizeSelect: itemToCart.sizeSelect,
      sizeSelectStoke: itemToCart.sizeSelectStoke,
      imageModel: itemToCart.imageModel,
    };

    const itemExist = cart?.cartItems?.find(
      (item) => item.idProduct === itemToCart?.idProduct
    );
    let newCartItems;
    // if (itemExist) {
    if (
      itemExist &&
      itemExist.idModel === itemToCart.idModel &&
      itemExist.sizeSelect === itemToCart.sizeSelect
    ) {
      // it is same product
      return alert("product in cart ...");
    }

    if (item.Qt > item.sizeSelectStoke) {
      alert(`sorry , there are only ${item.sizeSelectStoke} pice in stoke.`);
    }
    // newCartItems = [...(cart?.cartItems || [])];
    else {
      newCartItems = [...(cart?.cartItems || []), item];
    }

    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };
  const incQttOfProduct = async (idProduct, color, sizeSelect) => {
    let newItems = [];
    cart?.cartItems?.map((item) => {
      if (
        item.idProduct === idProduct &&
        item.Color === color &&
        item.sizeSelect === sizeSelect
      ) {
        if (item.Qt < item.sizeSelectStoke) {
          item.Qt++;
          newItems.push(item);
        } else {
          item.Qt = item.sizeSelectStoke;
          newItems.push(item);
          alert(
            `sorry , there are only ${item.sizeSelectStoke} pice in stoke.`
          );
        }
      } else {
        newItems.push(item);
      }
    });
    localStorage.setItem("cart", JSON.stringify({ cartItems: newItems }));
    setCartToState();
  };
  const decQttOfProduct = async (idProduct, color, sizeSelect) => {
    let newItems = [];
    cart?.cartItems?.map((item) => {
      if (
        item.idProduct === idProduct &&
        item.Color === color &&
        item.sizeSelect === sizeSelect
      ) {
        if (item.Qt > 1) {
          item.Qt = item.Qt - 1;
          newItems.push(item);
        } else {
          item.Qt = 1;
          newItems.push(item);
        }
      } else {
        newItems.push(item);
      }
    });
    localStorage.setItem("cart", JSON.stringify({ cartItems: newItems }));
    setCartToState();
  };

  const deleteItemFromCart = (idProduct, color, sizeSelect) => {
    const itemDelet = cart?.cartItems?.find(
      (i) =>
        i.idProduct === idProduct &&
        i.Color === color &&
        i.sizeSelect === sizeSelect
    );
    const newCartItems = cart?.cartItems?.filter((i) => i !== itemDelet);
    localStorage.setItem("cart", JSON.stringify({ cartItems: newCartItems }));
    setCartToState();
  };

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCartToState();
  };

  // manage token
  const [isAuthUser, setIsAuthUser] = useState(null);
  const [user, setUser] = useState(null);
  const token = Cookies.get("token");
  const userData = async () => {
    const res = await getUser();

    if (res.status === 200) {
      const userInfo = res.data;
      const dataUser = {
        id: userInfo._id,
        username: userInfo.username,
        email: userInfo.email,
      };
      setUser(dataUser);
    }
    return user;
  };

  useEffect(() => {
    if (Cookies.get("token") !== undefined) {
      setIsAuthUser(true);
      userData();
    } else {
      setIsAuthUser(false);
    }
  }, [token]);

  return (
    <GlobalContext.Provider
      value={{
        showCartModal,
        setShowCartModal,
        pageLevelLoader,
        setPageLevelLoader,
        user,
        isAuthUser,
        setIsAuthUser,
        componentLevelLoader,
        setComponentLevelLoader,
        cart,
        addItemToCart,
        incQttOfProduct,
        decQttOfProduct,
        deleteItemFromCart,
        clearCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
