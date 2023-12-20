import Link from "next/link";
import React, { useState } from "react";

const FormAddAddress = ({ setAddressClient }) => {
  const [form, setForm] = useState({
    clientName: "",
    phone: "",
    address: "",
    city: "",
    willai: "",
  });

  // ============= Error Msg  =================
  const [errClientName, setErrClientName] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errCity, setErrCity] = useState("");
  const [errWillai, setErrWillai] = useState("");

  const handelChangeForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const AddAddress = (e) => {
    e.preventDefault();
    // checked valid data
    if (form.checked) {
      if (!form.clientName) {
        setErrClientName("Enter your name");
      }

      if (!form.phone) {
        setErrPhone("Enter your phone number");
      }

      if (!form.address) {
        setErrAddress("Enter your address");
      }
      if (!form.city) {
        setErrCity("Enter your city name");
      }
      if (!form.willai) {
        setErrWillai("Enter the willia you are residing");
      }

      if (
        form.clientName &&
        form.phone &&
        form.address &&
        form.city &&
        form.willai
      ) {
        setAddressClient(form);

        setForm({
          clientName: "",
          phone: "",
          address: "",
          city: "",
          willai: "",
          checked: false,
        });
      }
    }
  };
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

            {/* Phone Number */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Phone Number
              </p>
              <input
                onChange={handelChangeForm}
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
            {/* Address */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Address
              </p>
              <input
                onChange={handelChangeForm}
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
            {/* Willai */}
            <div className="flex flex-col gap-.5">
              <p className="font-titleFont text-base font-semibold text-gray-600">
                Willai
              </p>
              <input
                onChange={handelChangeForm}
                name="willai"
                className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                type="text"
                placeholder="Your country"
              />
              {errWillai && (
                <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                  <span className="font-bold italic mr-1">!</span>
                  {errWillai}
                </p>
              )}
            </div>

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
              onClick={AddAddress}
              className={`${
                form.checked
                  ? "bg-primeColor hover:bg-black hover:text-white cursor-pointer"
                  : "bg-gray-500 hover:bg-gray-500 hover:text-gray-200 cursor-none"
              } w-full text-gray-200 text-base font-medium h-10 rounded-md hover:text-white duration-300`}
            >
              Add Address
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormAddAddress;
