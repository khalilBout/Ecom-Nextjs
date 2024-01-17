import Cookies from "js-cookie";

// fitch user from him
// mast be login and send token
// mast call this function from client component because Cookies
export async function getUser() {
  try {
    const res = await fetch("http://localhost:3000/api/user/me", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
      cache: "no-store",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

// fitch user by admin
export async function getUserFromAdmin(id) {
  try {
    const res = await fetch(
      `${process.env.GLOBAL_URL}/api/admin/userAdmin/${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
