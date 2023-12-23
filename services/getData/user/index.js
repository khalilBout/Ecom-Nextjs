import Cookies from "js-cookie";

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
