import { NextResponse } from "next/server";
import getAdminUsers from "./services/getData/user/getAdminUsers";

export async function middleware(request) {
  const path = request.nextUrl.pathname;

  const isPublicPath =
    path === "/account/login" || path === "/account/register";

  const isAdmin = path === "/dashboard";

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/account/login", request.nextUrl));
  }

  if (isAdmin && !token) {
    return NextResponse.redirect(new URL("/account/login", request.nextUrl));
  }
  if (isAdmin && token) {
    // const data = await getAdminUsers(token);

    // console.log("data from midd:", data);
    return NextResponse.next();

    // if (res && res.status === 200) {
    //   const userInfo = res.data;
    //   const isAdmin = userInfo.isAdmin;
    // //   console.log("is Admin:", isAdmin);
    //   if (isAdmin) {
    //     return NextResponse.next();
    //   } else {
    //     return NextResponse.redirect(new URL("/", request.nextUrl));
    //   }
    // } else {
    //   return NextResponse.redirect(new URL("/", request.nextUrl));
    // }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/account/:path*", "/dashboard"],
};
