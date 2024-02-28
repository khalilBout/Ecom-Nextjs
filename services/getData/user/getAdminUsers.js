import jwt from "jsonwebtoken";

const getAdminUsers = async (token) => {
  try {
    if (token && token !== "") {
      const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
      //   const isAdmin = decodedToken.isAdmin;
      //   return isAdmin;
    } else {
      return { message: "you are not Admin!!" };
    }
  } catch (err) {
    console.log("err:", err);
  }
};
export default getAdminUsers;
