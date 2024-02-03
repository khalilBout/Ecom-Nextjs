import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // console.log(req.nextUrl.pathname);
    // console.log(req.nextauth.token.role);
    // console.log("token:", req.nextauth.token);

    if (
      req.nextUrl.pathname.startsWith("/dashboard") &&
      req.nextauth.token.role != "admin"
    ) {
      return NextResponse.rewrite(new URL("/", req.url));
    }

    // if (
    // (req.nextauth.token && req.nextUrl.pathname.startsWith("/login")) ||
    // req.nextUrl.pathname.startsWith("/register")
    // ) {
    // //return NextResponse.rewrite(new URL("/", req.url));
    // return NextResponse.redirect(new URL("/", req.nextUrl));
    // }
    // if (req.nextUrl.pathname.startsWith("/profile") && !req.nextauth.token) {
    //   return NextResponse.rewrite(new URL("/account/login", req.url));
    // }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/dashboard", "/profile/:path*"],
};

// import { NextResponse } from "next/server";

// export async function middleware(request) {
//   const path = request.nextUrl.pathname;

//   const isPublicPath =
//     path === "/account/login" || path === "/account/register";

//   const isAdmin = path === "/dashboard";

//   const token = request.cookies.get("token")?.value || "";

//   if (isPublicPath && token) {
//     return NextResponse.redirect(new URL("/", request.nextUrl));
//   }

//   if (!isPublicPath && !token) {
//     return NextResponse.redirect(new URL("/account/login", request.nextUrl));
//   }

//   if (isAdmin && !token) {
//     return NextResponse.redirect(new URL("/account/login", request.nextUrl));
//   }
//   if (isAdmin && token) {
//     // const data = await getAdminUsers(token);

//     // console.log("data from midd:", data);
//     return NextResponse.next();
//   }
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: ["/account/:path*", "/dashboard"],
// };
