import axios from "axios";
import Cookies from "js-cookie";

// Serves to Client or Admin

export const addNewOrder = async (formData) => {
  try {
    const response = await fetch(`http://localhost:3000/api/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        //  Authorization: `Bearer ${Cookies.get("token")}`,
      },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getOrderById = async (id) => {
  try {
    const res = await fetch(`${process.env.GLOBAL_URL}/api/order/${id}`, {
      method: "GET",
      cache: "no-store",
    });

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

// Serves to Admin uniq
export const getAllOrders = async () => {
  try {
    const res = await fetch(`${process.env.GLOBAL_URL}/api/admin/orderAdmin`, {
      method: "GET",
    });
    const data = await res.json();
    return data;
    // return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateAOrder = async (formData) => {
  try {
    const res = await fetch(
      `${process.env.GLOBAL_URL}/api/admin/update-roder`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        cache: "no-store",
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteAOrder = async (id) => {
  try {
    const res = await fetch(
      `${process.env.GLOBAL_URL}/api/admin/delete-order?id=${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};
