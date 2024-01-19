"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getProviders, signIn, useSession } from "next-auth/react";

const Login = () => {
  const session = useSession();
  console.log("session:", session);

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ============= Initial State End here ===============
  // ============= Error Msg Start here =================
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");

  // ============= Error Msg End here ===================

  // ============= Event Handler Start here =============
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  // ============= Event Handler End here ===============
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email) {
      setErrEmail("Enter your email");
    }
    if (!password) {
      setErrPassword("Create a password");
    }
    // ============== Getting the value ==============
    if (email && password) {
      try {
        setLoading(true);

        // const response = await fetch("http://localhost:3000/api/user/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email,
        //     password,
        //   }),
        // });

        signIn("credentials", {
          email,
          password,
        });

        // if (response.status === 200) {
        //   console.log("user login.");
        //   // toast.success("Login success");
        //   setEmail("");
        //   setPassword("");
        //   router.refresh();
        // }
        // if (response.status === 400) {
        //   setErrorMsg("user dos't exist.");
        //   // toast.success("Login success");
        //   // router.refresh();
        //   setErrorMsg("user dos't exist.");
        //   setEmail("");
        //   setPassword("");
        // }
      } catch (error) {
        console.log("Login failed", error);
        setErrorMsg("Error Login:", error);

        // toast.error(error.message);
      } finally {
        setLoading(false);
      }
    }
  };
  return (
    <div className="w-full lgl:w-1/2 ">
      <form className="w-full lgl:w-[450px] h-screen flex items-center justify-center">
        <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
          <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
            Sign in
          </h1>
          <div className="flex flex-col gap-3">
            {/* Email */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Email
              </p>
              <input
                onChange={handleEmail}
                value={email}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="email"
                placeholder="john@workemail.com"
              />
              {errEmail && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errEmail}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Password
              </p>
              <input
                onChange={handlePassword}
                value={password}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="password"
                placeholder="Create password"
              />
              {errPassword && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errPassword}
                </p>
              )}
            </div>

            <button
              onClick={handleLogin}
              className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
            >
              Sign In
            </button>
            {errorMsg && (
              <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                <span className="font-bold italic mr-1">!</span>
                {errorMsg}
              </p>
            )}
            <p className="text-sm text-center font-titleFont font-medium">
              Don't have an Account !{" "}
              <Link href="/register">
                <span className="hover:text-blue-600 duration-300">
                  Register
                </span>
              </Link>
            </p>
            <button
              className="bg-green-200 text-gray-500  px-4 py-2 text-xl hover:bg-green-400 cursor-pointer"
              // trigger function of sign in (from next-auth) with credentials (in this case get user from google )
              // onClick={() => signIn("google")}
              onClick={(e) => {
                e.preventDefault();
                signIn("google", {
                  callbackUrl: "/",
                });
              }}
            >
              Login with Google
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
