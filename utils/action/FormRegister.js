import Link from "next/link";
import React, { useState } from "react";

const FormRegister = () => {
  // ============= Initial State  =============
  //   const [clientName, setClientName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [address, setAddress] = useState("");
  //   const [city, setCity] = useState("");
  //   const [willai, setCountry] = useState("");
  //   const [zip, setZip] = useState("");
  //   const [checked, setChecked] = useState(false);

  const [form, setForm] = useState({
    clientName: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    city: "",
    willai: "",
    zip: "",
    checked: false,
  });

  // ============= Error Msg  =================
  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errCity, setErrCity] = useState("");
  const [errCountry, setErrCountry] = useState("");
  const [errZip, setErrZip] = useState("");

  const handelChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const [successMsg, setSuccessMsg] = useState("");

  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // checked valid data
    if (form.checked) {
      if (!form.clientName) {
        setErrClientName("Enter your name");
      }
      if (!form.email) {
        setErrEmail("Enter your email");
      } else {
        if (!EmailValidation(email)) {
          setErrEmail("Enter a Valid email");
        }
      }
      if (!form.phone) {
        setErrPhone("Enter your phone number");
      }
      if (!form.password) {
        setErrPassword("Create a password");
      } else {
        if (password.length < 6) {
          setErrPassword("Passwords must be at least 6 characters");
        }
      }
      if (!form.address) {
        setErrAddress("Enter your address");
      }
      if (!form.city) {
        setErrCity("Enter your city name");
      }
      if (!form.country) {
        setErrCountry("Enter the country you are residing");
      }
      if (!form.zip) {
        setErrZip("Enter the zip code of your area");
      }

      if (
        form.clientName &&
        form.email &&
        EmailValidation(form.email) &&
        form.password &&
        form.password.length >= 6 &&
        form.address &&
        form.city &&
        form.country &&
        form.zip
      ) {
        setSuccessMsg(
          `Hello dear ${form.clientName}, Welcome you to OREBI Admin panel. We received your Sign up request. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${form.email}`
        );

        setForm({
          email: "",
          phone: "",
          password: "",
          address: "",
          city: "",
          willai: "",
          zip: "",
          checked: false,
        });
      }
    }
  };

  if (successMsg !== "") {
    console.log(successMsg);
  }
  return (
    <div className="w-full lgl:w-[500px] h-full flex flex-col ">
      <form className="w-full lgl:w-[500px] flex items-center justify-center">
        <div className="px-6 py-4 w-full flex flex-col justify-start ">
          <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
            Add info
          </h1>
          <div className="flex flex-col gap-3">
            {/* client name */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Full Name
              </p>
              <input
                onChange={handelChangeForm}
                name="clientName"
                // value={clientName}
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="eg. John Doe"
              />
              {errClientName && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errClientName}
                </p>
              )}
            </div>
            {/* Email */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Work Email
              </p>
              <input
                onChange={handelChangeForm}
                name="email"
                // value={email}
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
            {/* Phone Number */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Phone Number
              </p>
              <input
                onChange={handelChangeForm}
                // value={phone}
                name="phone"
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="008801234567891"
              />
              {errPhone && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errPhone}
                </p>
              )}
            </div>
            {/* Password */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Password
              </p>
              <input
                onChange={handelChangeForm}
                // value={password}
                name="password"
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
            {/* Address */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Address
              </p>
              <input
                onChange={handelChangeForm}
                // value={address}
                name="address"
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="road-001, house-115, example area"
              />
              {errAddress && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errAddress}
                </p>
              )}
            </div>
            {/* City */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                City
              </p>
              <input
                onChange={handelChangeForm}
                // value={city}
                name="city"
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="Your city"
              />
              {errCity && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errCity}
                </p>
              )}
            </div>
            {/* Country */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Willai
              </p>
              <input
                onChange={handelChangeForm}
                // value={willai}
                name="willai"
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="Your country"
              />
              {errCountry && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errCountry}
                </p>
              )}
            </div>
            {/* Zip code */}

            {/* Checkbox */}
            <div className="flex items-start mdl:items-center gap-2">
              <input
                onChange={handelChangeForm}
                className="w-4 h-4 mt-1 mdl:mt-0 cursor-pointer"
                type="checkbox"
                name="checked"
                value={!form.checked}
              />
              <p className="text-sm text-primeColor">
                I agree to the OREBI{" "}
                <span className="text-blue-500">Terms of Service </span>and{" "}
                <span className="text-blue-500">Privacy Policy</span>.
              </p>
            </div>
            <button
              onClick={handleSignUp}
              className={`${
                form.checked
                  ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                  : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
              } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
            >
              Add Info
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormRegister;
