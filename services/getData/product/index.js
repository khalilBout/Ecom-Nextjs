import Cookies from "js-cookie";

// Serves to Client or Admin

export const getAllProducts = async () => {
  try {
    const res = await fetch(`${process.env.GLOBAL_URL}/api/product`, {
      method: "GET",
      cache: "no-cache",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
// export const getNewProducts = async (type) => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/product?type=${type}`, {
//       method: "GET",
//       cache: "no-cache",
//     });
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// ${process.env.GLOBAL_URL}
// export const productByCategory = async (id) => {
//     try {
//       const res = await fetch(
//         `${process.env.GLOBAL_URL}/api/product-by-category?id=${id}`,
//         {
//           method: "GET",
//           cache: "no-store",
//         }
//       );

//       const data = await res.json();

//       return data;
//     } catch (e) {
//       console.log(e);
//     }
//   };

export const getProductById = async (id) => {
  try {
    const res = await fetch(`${process.env.GLOBAL_URL}/api/product/${id}`, {
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

export const addNewProduct = async (formData) => {
  try {
    const response = await fetch(
      `${process.env.GLOBAL_URL}/api/admin/add-product`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
        body: JSON.stringify(formData),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateAProduct = async (formData) => {
  try {
    const res = await fetch(
      `${process.env.GLOBAL_URL}/api/admin/update-product`,
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

export const deleteAProduct = async (id) => {
  try {
    const res = await fetch(
      `${process.env.GLOBAL_URL}/api/admin/delete-product?id=${id}`,
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
